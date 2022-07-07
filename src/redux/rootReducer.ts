import { combineReducers } from "redux";
import { userReducer, IUserReducerState } from "./user/user.reducer";
import {
  ICOntextReducerState,
  contextReducer,
} from "./userContext/context.reducer";
export type reducerState = {
  userReducer: IUserReducerState;
  contextReducer: ICOntextReducerState;
};
const rootReducer = combineReducers({
  userReducer,
  contextReducer,
});
export default rootReducer;
