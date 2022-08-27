import { REMOVE, SET_STAFF, SET_USER } from "./constant";
export function setUser(user: User) {
  return {
    type: SET_USER,
    payload: user,
  };
}
export function setStaff(staff: Staff) {
  return {
    type: SET_STAFF,
    payload: staff,
  };
}
export function remove() {
  return {
    type: REMOVE,
  };
}
