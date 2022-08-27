import {LOGIN,LOGIN_ERROR,LOGIN_SUCESS} from "./staff.constants";
import { Staff } from "./staff.types";
export function login() {
  return {
    type: LOGIN,
  };
}
export function loginSucess(staff: Staff) {
  return {
    type: LOGIN_SUCESS,
    payload: staff,
  };
}
export function loginError(messageError: string) {
  return {
    type: LOGIN_ERROR,
    payload: messageError,
  };
}
