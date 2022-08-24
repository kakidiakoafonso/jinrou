import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";
import { PurchaseReducerState } from "./purchase/purchase.types";
import { cartReducer } from "./cart/cart.reducers";

import { EventReducerState, eventReducer, Event } from "./events/index";
export type reducerState = {
  userReducer: UserReducerState;
  eventReducer: EventReducerState;
  cartReducer: Event[];
  purchaseReducer: PurchaseReducerState;
};
const rootReducer = combineReducers({
  userReducer,
  eventReducer,
  cartReducer,
});
export default rootReducer;
