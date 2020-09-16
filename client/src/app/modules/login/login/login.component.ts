import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
// import * as alertify from 'alertifyjs';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../login.service";
import {AppCacheProvider} from '../../shared/providers/app-cache-provider';
// import {IUser} from '../../shared/dataModels/IUser';
// import {NavService} from "../../navigation/navigation.service";
import {ErrorMessageService} from "../../shared/components/error-message/error-message.service";
// import {FormsService} from './../../shared/services/forms.service';
// import {ListingsService} from "../../listings/listings.service";
import { AuthService, GoogleLoginProvider, LinkedinLoginProvider } from 'angular-6-social-login-v2';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
  providers: []
})
export class LoginComponent implements OnInit {

  mode: number;
  modes: IModes;
  termsAgreed: boolean;
  loginForm: FormGroup;
  signupForm: FormGroup;
  forgotForm: FormGroup;
  resetPasswordForm: FormGroup;
  signupSubmitted: boolean;
  linkedinInterval: any;
  userFoundClass: string;
  userFoundText: string;
  userNotFoundText: string;
  hashUserId: string;
  passwordChanged: boolean;
  processing: boolean;

  constructor(public dialogRef: MatDialog,
              // private navService: NavService,
              private loginService: LoginService,
              private router: Router,
              private appCacheProvider: AppCacheProvider,
              private formBuilder: FormBuilder,
              private errorMessageService: ErrorMessageService,
              // private formService: FormsService,
              // private listingsService: ListingsService,
              // private intercomService: IntercomService,
              private socialAuthService: AuthService,
              private usersService: UsersService,
              private route: ActivatedRoute
  ) {
  }

  async ngOnInit() {
    this.processing = false;
    this.modes = Modes;
    // this.mode = await this.loginService.isUserHavingAccount() ? Modes.login : Modes.signup;
    // this.route.queryParams
    //   .filter((params: any) => params.page)
    //   .subscribe((params: any) => {
    //     if (params.page === 'resetpassword') {
    //       this.mode = Modes.resetPassword;
    //       this.hashUserId = params.id;
    //     }
    //   });

    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });

    this.loginForm = new FormGroup({
      loginEmail: new FormControl(['', Validators.required]),
      loginPassword: new FormControl(['', Validators.required])
    });

    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });

    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('newPassword', 'confirmPassword')
    });

    this.clearInputFields();
  }

  toggleSignUp() {
    this.mode = (this.mode === this.modes.signup) ? this.modes.login : this.modes.signup;
    this.clearInputFields();
  }

  login = () => {
    this.processing = true;
    this.loginService.login(
      this.loginForm.value.loginEmail, this.loginForm.value.loginPassword).subscribe(this.handleLogin, this.handleError);
  }

  signup = () => {
    this.loginService.signup(
      this.signupForm.value.firstName,
      this.signupForm.value.lastName,
      this.signupForm.value.email,
      this.signupForm.value.password
    ).subscribe((res: AuthResponse) => {
        // lead save
        const fullName = `${this.signupForm.value.firstName} ${this.signupForm.value.lastName}`;
        // this.formService.leadSavePost('signup', 'Registered Seller', 'Seller', this.signupForm.value.email, 'N/A', 'N/A', fullName)
        //   .subscribe(() => {
        //   }, () => {
        //   });
        // window.dataLayer.push(​{'event': 'SignUpStep1'}​);
        this.handleLogin(res);
      },
      this.handleError
    );
  }

  handleLogin = async (res: AuthResponse) => {
    console.log(res);
    this.loginService.setUserCookie();
    const backSlash = '/';
    // const requestedLoginUrl = this.navService.getLoginUrl() ? this.navService.getLoginUrl() : '';
    // const navigateToUrl = requestedLoginUrl && (requestedLoginUrl === backSlash) ? backSlash : backSlash + requestedLoginUrl;

    if (Modes.login === this.mode) {
      // window.dataLayer.push(​{'event': 'LogIn'}​);
    }

    // if (localStorage.getItem('sellerRoute')) {
    //   const route = localStorage.getItem('sellerRoute');
    //   this.appCacheProvider.saveToken(res.access_token);
    //   this.appCacheProvider.setUserDetails(res.userInfo);
    //   await this.getUserStatus();
    //   this.closeLogin();
    //   localStorage.removeItem('sellerRoute');
    //   await this.router.navigate([route]);
    // } else {
    //   if (res.access_token) {
    //     this.appCacheProvider.saveToken(res.access_token);
    //     this.appCacheProvider.setUserDetails(res.userInfo);
    //     await this.getUserStatus();
    //     this.closeLogin();
    //     this.router.navigate([navigateToUrl]);
    //   }
    // }
    if (res.access_token) {
      this.appCacheProvider.saveToken(res.access_token);
      // this.appCacheProvider.setUserDetails(res.userInfo);
      await this.getUserStatus();
      this.closeLogin();
      // this.router.navigate([navigateToUrl]);
    }
  }

  handleError = (error) => {
    this.processing = false;
    this.errorMessageService.openSnackBar({
      type: 'error-message',
      color: 'error',
      message: error.error.message
    });
    // alertify.error(error.error.message);
    console.error('login error: ', error);
  }

  loginSubmit() {
    this.login();
  }

  async signInWithGoogle() {
    try {
      const userData = await this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
      this.loginService.socialLogin(userData.email, userData.provider, userData.id)
      .subscribe((res: AuthResponse) => {
        // window.dataLayer.push(​{'event': 'SignUpStep1Google'}​);
        this.handleLogin(res);
      }, this.handleError);
    } catch (error) {
      console.log(error);
    }
  }

  async signInWithLinkedin() {
    this.loginService.signInWithLinkedin();
    this.linkedinInterval = setInterval(async () => {
      if (localStorage.token) {
        clearInterval(this.linkedinInterval);
        const res = {
          userInfo: this.appCacheProvider.getUserDetails(),
          access_token: this.appCacheProvider.getToken()
        };
        // window.dataLayer.push(​{'event': 'SignUpStep1Linkedin'}​);
        this.handleLogin(res);
      }
    }, 3000);
  }

  termsAndConditionsAgree = () => {
    this.termsAgreed = !this.termsAgreed;
    console.warn('termsAgreed clicked...');
  }

  forgotPassword = () => {
    this.mode = Modes.forgotPassword;
  }

  get fc(): any {
    return this.signupForm.controls;
  }

  resetValue() {
    this.signupForm.reset({firstName: '', lastName: '', email: '', password: '', confirmPassword: ''});
    this.loginForm.reset({loginEmail: '', loginPassword: ''});
    this.forgotForm.reset({email: ''});
    this.resetPasswordForm.reset({newPassword: '', confirmPassword: ''});
  }

  signupSubmit() {
    this.signupSubmitted = true;
    if (this.signupForm.invalid) {
      console.error('form invalid! ', this.signupForm.value);
      return;
    } else {
      this.signup();
    }
  }

  clearInputFields() {
    this.signupSubmitted = false;
    this.resetValue();
  }

  closeLogin() {
    this.clearInputFields();
    this.dialogRef.closeAll();
  }

  gotoTermsPage() {
    window.open('legal', '_blank');
  }

  get modeLabel() {
    const info: any = {title: '', intro: '', navText: ''};

    switch (this.mode) {
      case this.modes.signup:
        info.title = 'Sign Up';
        info.intro = 'Create an account';
        info.navText = 'Already Skkiper Member?';
        break;
      case this.modes.login:
        info.title = 'Log In';
        info.intro = 'Log in to your account';
        info.navText = 'Don\'t Have an Account?';
        break;
      case this.modes.forgotPassword:
        info.title = 'Forgot Password';
        info.intro = 'Enter your username or email to recover your password. <br> You will receive an email with instructions.',
        info.navText = 'Already Skkiper Member?';
        break;
      case this.modes.resetPassword:
        info.title = 'Create New Password';
        info.intro = '',
        info.navText = 'Already Skkiper Member?';
        break;
      default:
        break;
    }

    return info;
  }

  forgotFormSubmit() {
    this.usersService.getUsers(1, this.forgotForm.value.email)
      .subscribe((res: any) => {
        console.log(res);
        if (res.length === 1) {
          this.loginService.sendResetEmail(res[0])
          .subscribe(resp => {
            this.resetValue();
            this.userFoundClass = 'user-found';
            this.userFoundText = 'An e-mail with instructions to create a new password has been sent to you.';
          }, (err: any) => {
            console.log(err);
          });
        } else {
          this.userFoundClass = 'user-not-found';
          this.userFoundText = 'Email address was not found in our system';
        }
      }, () => {
        //
      });
  }

  resetPasswordFormSubmit() {
    this.loginService.resetPassword(this.hashUserId, this.resetPasswordForm.value.newPassword)
    .subscribe((res: any) => {
      console.log(res);
      this.passwordChanged = true;
      this.resetValue();
    });
  }

  async getUserStatus() {
    // this.navService.isAdmin = this.appCacheProvider.isAdmin();
    await this.sellerHasItems();
  }

  async sellerHasItems() {
    const userDetails = this.appCacheProvider.getUserDetails();
    if (userDetails && userDetails.id) {
      // this.navService.sellerOnboarded = await this.listingsService.sellerHasListing(userDetails.id);
    }
  }
}

export interface AuthResponse {
  access_token: string;
  // userInfo: IUser;
}

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({mustMatch: true});
    } else {
      matchingControl.setErrors(null);
    }
  };
}

export enum Modes {
  signup = 1,
  login = 2,
  forgotPassword = 3,
  resetPassword = 4
}

export interface IModes {
  signup: number;
  login: number;
  forgotPassword: number;
  resetPassword: number;
}
