import * as actionTypes from "./user.constant";
import { User } from "./user.types";
export function login() {
  return {
    type: actionTypes.LOGIN,
  };
}
export function loginSucess(user: User) {
  return {
    type: actionTypes.LOGIN_SUCESS,
    payload: user,
  };
}
export function loginError(messageError: string) {
  return {
    type: actionTypes.LOGIN_ERROR,
    payload: messageError,
  };
}
