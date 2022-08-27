import { REMOVE, SET_STAFF, SET_USER } from "./constant";

const initialState: UserReducerState = {
  type: null,
  user: {} as User,
};

export function userReducer(
  state: UserReducerState = initialState,
  action: ActionReducer
): UserReducerState {
  switch (action.type) {
    case SET_USER:
      return {
        type: "USER",
        user: action.payload,
      };
      break;
    case SET_STAFF:
      return {
        type: "STAFF",
        user: action.payload,
      };
      break;
    case REMOVE:
      return {
        type: null,
        user: {} as User,
      };
      break;

    default:
      return state;
      break;
  }
}
