import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import * as service from "./service";

function useAuthUser() {
  return useMutation<User, Error, Credentials>((credential: Credentials) =>
    service.userLogin(credential)
  );
}
function useAuthStaff() {}

export { useAuthUser, useAuthStaff };
