import { IModes } from './login/login.component';
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
// import {CookieService} from "ngx-cookie-service";
import {environment} from '../../../environments/environment';


@Injectable()
export class LoginService {

  SIGN_UP_URL = '/auth/local/signup';
  LOGIN_URL = '/auth/local';
  FORGOT_PASSWORD_URL = '/auth/local';
  SOCIAL_LOGIN_URL = '/auth/local/social';
  LINKEDIN_LOGIN_URL = '/auth/local/social/linkedin';
  SEND_FORGOT_PASSWORD = '/auth/local/forgotpassword';
  RESET_PASSWORD = '/auth/local/resetpassword';

  mode: number;
  constructor(private http: HttpClient, 
    // private cookieService: CookieService
    ) {
  }

  public login = (email, password) => {
    return this.http.post(this.LOGIN_URL, {email, password});
  }

  public signup = (first_name, last_name, email, password) => {
    return this.http.post(this.SIGN_UP_URL, {first_name, last_name, email, password});
  }

  public forgotPassword = (email) => {
    return this.http.post(this.FORGOT_PASSWORD_URL, {email});
  }

  async isUserHavingAccount() {
    // return await this.cookieService.check('_is_kkkiper_user');
  }

  async setUserCookie() {
    const cookie = await this.isUserHavingAccount();
    // if (cookie) return;
    // this.cookieService.set('_is_kkkiper_user', 'true',
    //   365, '/', location.hostname);
  }

  public socialLogin(email, socialType, profile) {
    return this.http.post(this.SOCIAL_LOGIN_URL, {email, socialType, profile});
  }

  public signInWithLinkedin() {
    // window.open(`${environment.baseUrl}${this.LINKEDIN_LOGIN_URL}`);
  }

  public sendResetEmail(data) {
    return this.http.post(this.SEND_FORGOT_PASSWORD, {userId: data.id, email: data.email});
  }

  public resetPassword(id, newPassword) {
    return this.http.post(this.RESET_PASSWORD, {id, newPassword});
  }
}
