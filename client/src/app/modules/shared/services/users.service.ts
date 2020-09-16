import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppCacheProvider } from "../providers/app-cache-provider";
import * as MD5 from 'md5';
import { UserRoleTypes } from "../dataModels/enums/userRoleTypes";

@Injectable()
export class UsersService {
  private GET_USERS = 'auth/local';
  md5: any;
  gravatarUrl: string = 'https://gravatar.com/avatar/';
  userDetails: any = this.appCacheProvider.getUserDetails();
  USER_INFO: string = 'userInfo';
  GUEST: string = 'Guest';

  constructor(private http: HttpClient,
    private appCacheProvider: AppCacheProvider) {
    this.md5 = MD5;
  }

  getUsers = (limit: number, startingWith: string) => {
    return this.http.get(`${this.GET_USERS}?limit=${limit}&startingWith=${startingWith}`);
  }

  getUserAvatar() {
    try {
      if (!this.userDetails) {
        this.userDetails = JSON.parse(localStorage.getItem('userInfo'));
      }
      const email = this.userDetails ? this.userDetails.email : 'random';
      return `${this.gravatarUrl}${this.md5(email)}?d=retro`;
    } catch (e) {
      console.error('error in getUserAvatar', e);
      return '';
    }
  }

  getUserEmail() {
    try {
      if (!this.userDetails) {
        this.userDetails = JSON.parse(localStorage.getItem('USER_INFO'));
      }
      return this.userDetails ? this.userDetails.email : this.GUEST;
    } catch (e) {
      console.error('error in getUserEmail', e);
      return this.GUEST;
    }
  }

  getUserName(): string {
    try {
      if (!this.userDetails) {
        this.userDetails = JSON.parse(localStorage.getItem('USER_INFO'));
      }

      if (this.userDetails && (this.userDetails.first_name || this.userDetails.last_name)) {
        const fullName = this.userDetails.first_name && this.userDetails.last_name ?
          this.userDetails.first_name + '' + this.userDetails.last_name : this.userDetails.first_name ?
            this.userDetails.last_name : '';
        return fullName ? fullName : this.getUserEmail();
      } else {
        return this.getUserEmail();
      }
    } catch (e) {
      console.error('error in getUserName', e);
      return;
    }
  }

  getUserRole(): string {
    try {
      if (!this.userDetails) {
        this.userDetails = JSON.parse(localStorage.getItem('USER_INFO'));
      }

      const roleId: number = this.userDetails ? this.userDetails.role_id : null;
      if (!roleId) {
        return '';
      }
      const userRoles = Object.keys(UserRoleTypes).filter(x => !(parseInt(x, 10) >= 0));
      return userRoles[roleId - 1];
    } catch (e) {
      console.error('error in getUserRole', e);
      return;
    }
  }

  // todo: change mock data
  getUsersProfileCompletionStatus(): number {
    return 70;
  }

  // todo: complete edit my profile
  // edit my profile
  editUsersProfile() {
    console.warn('edit user profile clicked');
  }
}
