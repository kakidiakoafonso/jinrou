import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import * as service from "./service";
import { UserUpdate } from "./service";

function useGetUser(userId: string) {
  return useQuery<User, Error, User, string>([userId], () =>
    service.getOne(userId)
  );
}
function useCreateUser() {
  return useMutation<User, Error, FormData>((user: FormData) =>
    service.create(user)
  );
}
function useUpdateUser() {
  return useMutation<User, Error, UserUpdate>((data: UserUpdate) =>
    service.update(data)
  );
}
function useDeleteUser() {
  return useMutation<User, Error, string>((userId: string) =>
    service.remove(userId)
  );
}

export { useCreateUser, useDeleteUser, useUpdateUser, useGetUser };
