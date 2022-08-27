import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";
import { PurchaseReducerState } from "./purchase/purchase.types";
import { cartReducer } from "./cart/cart.reducers";

export type reducerState = {
  userReducer: UserReducerState;
  cartReducer: Event[];
  purchaseReducer: PurchaseReducerState;
};
const rootReducer = combineReducers({
  userReducer,
  cartReducer,
});
export default rootReducer;
