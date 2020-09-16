import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {Location} from "@angular/common";

import {Observable} from "rxjs/Observable";
import {AppCacheProvider} from "../providers/app-cache-provider";

@Injectable()
export class AuthGuardLoginProvider implements CanActivate {
  constructor(private router: Router,
              private location: Location,
              private appCacheProvider: AppCacheProvider) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const query: any = this.getParsedQueryString();

    if (query.access_token) {
      console.log('token found in query param. Permitting user');
      this.appCacheProvider.saveToken(query.access_token, query.expiry);
      this.appCacheProvider.setUserDetails(JSON.parse(decodeURIComponent(query.userInfo)));
      this.router.navigate(['/']);
    } else {
      return true;

    }
  }

  private getParsedQueryString = () => {
    const pathFragments = this.location.path(true);
    return this.parseQueryString(pathFragments);
  }

  parseQueryString = (queryString) => {
    const params = {};
    // remove path until ?
    const startFrom = queryString.indexOf("?");
    if (startFrom > -1) {
      const queries = queryString.substring(startFrom + 1).split(';');
      queries.forEach(query => {
        const keyValQuery = query.split("=");
        if (keyValQuery.length === 2) {
          params[keyValQuery[0]] = keyValQuery[1];
        }
      });
    }

    return params;
  }


}
