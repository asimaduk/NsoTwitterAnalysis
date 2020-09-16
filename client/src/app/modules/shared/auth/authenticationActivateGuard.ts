import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Location} from '@angular/common';
import {AppCacheProvider} from '../providers/app-cache-provider';
// import {NavService} from "../../navigation/navigation.service";

@Injectable()
export class AuthenticationActivateGuard implements CanActivate {

  constructor(private router: Router,
              private location: Location,
              private appCacheProvider: AppCacheProvider,
              // private navService: NavService
              ) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // while mini site mode active do no allow internal navigation
    // if (this.appCacheProvider.getMiniSiteMode()) {
    //   return;
    // }
    let routUrl;
    if (route.url.length > 0) {
      routUrl = route.url[0].path;
    }

    if (this.appCacheProvider.isLoggedIn()) {
      // Only admin and broker can access Onboarding
      // if (routUrl === 'onboarding' &&
      //   !this.appCacheProvider.isAdmin() && !this.appCacheProvider.isBroker()) {
      //   this.navService.showLoginDialog(routUrl);
      // }
      // only admin can access admin
      // if (routUrl === 'admin' && !this.appCacheProvider.isAdmin()) {
      //   this.navService.showLoginDialog(routUrl);
      // }
      return true;
    } else {
      // if (route.params.schema === 'buyerOnboarding') {
      //   this.navService.showLoginDialog('onboarding/buyer/buyerOnboarding');
      // } else this.navService.showLoginDialog(routUrl);
    }
  }
}
