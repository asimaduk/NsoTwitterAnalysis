import {UserRoleTypes} from "./enums/userRoleTypes";

export interface IUser {
  id?: any;
  email?: string;
  type: UserRoleTypes;
  image?: string;
}
