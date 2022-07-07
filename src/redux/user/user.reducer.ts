import * as actionTypes from "./user.constant";
import { User } from "./user.types";
export type IUserReducerState = {
  user: User | [];
  loading: boolean;
  error: string;
};
const initialState: IUserReducerState = {
  error: "",
  loading: false,
  user: [],
};

type IAction = {
  type: string;
  payload: any;
};
export function userReducer(
  state: IUserReducerState = initialState,
  action: IAction
) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        error: "",
        loading: true,
        user: [],
      };
      break;
    case actionTypes.LOGIN_ERROR:
      return {
        error: action.payload,
        loading: false,
        user: [],
      };
      break;
    case actionTypes.LOGIN_SUCESS:
      return {
        error: "",
        loading: false,
        user: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
}
