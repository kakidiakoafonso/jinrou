import { AdvantageReducerState } from './advantage/advantage.types';
import { combineReducers } from "redux";
import { userReducer, IUserReducerState } from "./user/user.reducer";
import { advantageReducer } from "./advantage/advantage.reducers";
import { purchaseReducer } from "./purchase/purchase.reducer";
import { PurchaseReducerState } from "./purchase/purchase.types";
import { cartReducer } from "./cart/cart.reducers";
import {
  ICOntextReducerState,
  contextReducer,
} from "./userContext/context.reducer";
import {EventReducerState,eventReducer, Event} from './events/index'
export type reducerState = {
  userReducer: IUserReducerState;
  contextReducer: ICOntextReducerState;
  eventReducer:EventReducerState,
  advantageReducer:AdvantageReducerState,
  cartReducer:Event[]
  purchaseReducer:PurchaseReducerState
};
const rootReducer = combineReducers({
  userReducer,
  contextReducer,
  eventReducer,
  advantageReducer,
  cartReducer,
  purchaseReducer
});
export default rootReducer;
