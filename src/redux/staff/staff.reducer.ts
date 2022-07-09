import * as actionTypes from "./staff.constants";
import { Action,StaffReducerState } from "./staff.types";

const initialState: StaffReducerState = {
  error: "",
  loading: false,
  staff: [],
};


export function userReducer(
  state: StaffReducerState = initialState,
  action: Action
) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        error: "",
        loading: true,
        staff: [],
      };
      break;
    case actionTypes.LOGIN_ERROR:
      return {
        error: action.payload,
        loading: false,
        staff: [],
      };
      break;
    case actionTypes.LOGIN_SUCESS:
      return {
        error: "",
        loading: false,
        staff: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
}
