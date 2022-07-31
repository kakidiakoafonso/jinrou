import { AdvantageReducerState } from './advantage/advantage.types';
import { combineReducers } from "redux";
import { userReducer, IUserReducerState } from "./user/user.reducer";
import { advantageReducer } from "./advantage/advantage.reducers";
import {
  ICOntextReducerState,
  contextReducer,
} from "./userContext/context.reducer";
import {EventReducerState,eventReducer} from './events/index'
export type reducerState = {
  userReducer: IUserReducerState;
  contextReducer: ICOntextReducerState;
  eventReducer:EventReducerState,
  advantageReducer:AdvantageReducerState
};
const rootReducer = combineReducers({
  userReducer,
  contextReducer,
  eventReducer,
  advantageReducer
});
export default rootReducer;
