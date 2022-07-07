import * as actionTypes from "./context.constant";
import { User } from "./context.types";
export type ICOntextReducerState = {
  user: "STAFF" | "USER" | null;
};
const initialState: ICOntextReducerState = {
  user: null,
};

type IAction = {
  type: string;
  payload: any;
};
export function contextReducer(
  state: ICOntextReducerState = initialState,
  action: IAction
) {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { user: "USER" };
      break;
    case actionTypes.SET_STAFF:
      return { user: "STAFF" };
      break;
    case actionTypes.CLEAN_USER:
      return { user: null };
      break;
    default:
      return state;
      break;
  }
}
