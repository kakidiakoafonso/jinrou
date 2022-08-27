import * as actionTypes from "./purchase.constants";
import { Action,Purchase,PurchaseReducerState } from "./purchase.types";

const initialState: PurchaseReducerState = {
  error: "",
  loading: false,
  purchase: {} as Purchase[],

};


export function purchaseReducer(
  state: PurchaseReducerState = initialState,
  action: Action
):PurchaseReducerState {
  switch (action.type) {
    case actionTypes.FETCHING:
      return {
        error: "",
        loading: true,
        purchase: {} as Purchase[],
      };
      break;
    case actionTypes.ERROR:
      return {
        error: action.payload,
        loading: false,
        purchase: {} as Purchase[],
      };
      break;
    case actionTypes.SUCESS:
      return {
        error: "",
        loading: false,
        purchase: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
}
