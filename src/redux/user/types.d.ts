type UserReducerState = {
  user: User;
  type: UserType;
};

type ActionReducer = {
  type: string;
  payload: User;
};

type UserType = "USER" | "STAFF" | null;
