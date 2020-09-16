import {EventEmitter, Injectable} from '@angular/core';

@Injectable({providedIn: "root"})
export class AppCacheProvider {
  // skiperSec = 'skipperSec';
  // private _userDetails: IUSerDetails = null;
  constructor() {
  }

  public loggedInChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  connected = new EventEmitter<string>();

  public raiseConnectEvent(eventType) {
    this.connected.emit(eventType);
  }

  public getToken = (): string => {
    return localStorage.getItem('token');
  }

  setListingScore(value) {
    localStorage.setItem('listingScore', value);
  }

  getListingsScore() {
    return Number(localStorage.getItem('listingScore'));
  }

  setBuyerData(data) {
    // console.log(this.localStorageSize())
    if (this.localStorageSize() <= 9200) {
      localStorage.setItem('buyerData', JSON.stringify(data));
    }
  }

  getBuyerData() {
    return JSON.parse(localStorage.getItem('buyerData'));
  }

  setUserDetails(details) {
    localStorage.setItem('userInfo', JSON.stringify(details));
  }

  getUserDetails() {
    try {
      return JSON.parse(localStorage.getItem('userInfo'));
    } catch (E) {
      return {};
    }
  }

  public isLoggedIn = (): boolean => {
    return !!this.getToken();
  }

  public saveToken = (token: string, expiry?: string) => {
    localStorage.setItem('token', token);
    this.loggedInChanged.emit(true);
  }

  public saveValue = (name: string, value: any): void => {
    localStorage.setItem(name, value);
  }

  public getValue = (name: string): string => {
    return localStorage.getItem(name);
  }

  public deleteValue = (name: string) => {
    localStorage.removeItem(name);
  }

  public clearLocalStorage = () => {
    localStorage.clear();
    // this._userDetails = null;
    this.loggedInChanged.emit(false);
  }

  // public isAdmin = () => {
  //   const userDetails = this.getUserDetails();
  //   if (userDetails) {
  //     return userDetails.role_id === UserRoleTypes.Admin;
  //   } else {
  //     return false;
  //   }
  // }

  // public isSuperAdmin = () => {
  //   const userDetails = this.getUserDetails();
  //   if (userDetails) {
  //     return userDetails.role_id === UserRoleTypes.SuperAdmin;
  //   } else {
  //     return false;
  //   }
  // }

  // public isBroker = () => {
  //   const userDetails = this.getUserDetails();
  //   if (userDetails) {
  //     return userDetails.role_id === UserRoleTypes.Broker;
  //   } else {
  //     return false;
  //   }
  // }

  // public isSeller = () => {
  //   const userDetails = this.getUserDetails();
  //   if (userDetails) {
  //     return userDetails.role_id === UserRoleTypes.Seller;
  //   } else {
  //     return false;
  //   }
  // }


  // public isBuyer = () => {
  //   const userDetails = this.getUserDetails();
  //   if (userDetails) {
  //     return userDetails.role_id === UserRoleTypes.Buyer || userDetails.role_id === UserRoleTypes.BuyerSigned;
  //   } else {
  //     return false;
  //   }
  // }

  public getMiniSiteMode = (): boolean => {
    const objectExists = localStorage.getItem('isMiniSiteMode');
    return objectExists && objectExists === 'true';
  }

  setCurrentAssetIndex(index) {
    localStorage.setItem("home-screen-asset-index", index);
  }
  getCurrentAssetIndex() {
    return Number(localStorage.getItem("home-screen-asset-index"));
  }

  localStorageSize() {
    let _lsTotal = 0, _xLen, _x;
    for (_x in localStorage) {
      _xLen = (((localStorage[_x].length || 0) + (_x.length || 0)) * 2);
      _lsTotal += _xLen;
      // console.log(_x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB");
    }
    const total = parseFloat((_lsTotal / 1024).toFixed(2));
    // console.log("Total = " + total + " KB");
    return total;
  }


  // public setUserDetails = (details: IUSerDetails) => {
  //   this._userDetails = details;
  //   const encrptUserDetails = cryptoJs.AES.encrypt(JSON.stringify(this._userDetails), this.skiperSec);
  //   const stringEncrypt = encrptUserDetails.toString();
  //   localStorage.setItem('userDetails', encrptUserDetails);
  // }

  // public getUserDetails = () => {
  //   if (this._userDetails) {
  //     return this._userDetails;
  //   } else {
  //     const encrptUserDetails = localStorage.getItem('userDetails');
  //     const dcryptUserBytes = cryptoJs.AES.decrypt(encrptUserDetails, this.skiperSec );
  //     const dcryptUserBytesString = dcryptUserBytes.toString(cryptoJs.enc.Utf8);
  //     const jsonUSer =  JSON.parse(dcryptUserBytesString);
  //     return jsonUSer;
  //   }
  // }

  // public IsLoggedUserAdmin = () => {
  //   const userDetails = this.getUserDetails();
  //   if (userDetails) {
  //     return isAdmin(userDetails.roleId);
  //   } else {
  //     return false;
  //   }
  // }

  // public IsLoggedUserSuperAdmin = () => {
  //   const userDetails = this.getUserDetails();
  //   if (userDetails) {
  //     return isSuperAdmin(userDetails.roleId);
  //   } else {
  //     return false;
  //   }
  // }
}
