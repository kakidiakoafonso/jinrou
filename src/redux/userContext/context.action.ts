import * as actionTypes from "./context.constant";
import { User } from "./context.types";
export function user() {
  return {
    type: actionTypes.SET_USER,
  };
}
export function staff() {
  return {
    type: actionTypes.SET_STAFF,
  };
}
export function clean() {
  return {
    type: actionTypes.CLEAN_USER,
  };
}
