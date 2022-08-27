import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import UserRoute from "./User.route";
import StaffRoute from "./Staff.route";
import NonAuthenticatedRoute from "./NonAuthenticated.route";
import { reducerState } from "../redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";

export default function Route() {
  const USER_TYPE = useSelector<reducerState, "STAFF" | "USER" | null>(
    (state) => state.userReducer.type
  );
  return (
    <NavigationContainer>
      {USER_TYPE === null && <NonAuthenticatedRoute />}

      {USER_TYPE === "USER" && <UserRoute />}
      {USER_TYPE === "STAFF" && <StaffRoute />}
    </NavigationContainer>
  );
}
