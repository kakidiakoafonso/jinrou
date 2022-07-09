import { combineReducers } from "redux";
import { userReducer, IUserReducerState } from "./user/user.reducer";
import {
  ICOntextReducerState,
  contextReducer,
} from "./userContext/context.reducer";
import {EventReducerState,eventReducer} from './events/index'
export type reducerState = {
  userReducer: IUserReducerState;
  contextReducer: ICOntextReducerState;
  eventReducer:EventReducerState
};
const rootReducer = combineReducers({
  userReducer,
  contextReducer,
  eventReducer
});
export default rootReducer;
