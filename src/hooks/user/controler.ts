import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import * as service from "./service";

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
  return useMutation<User, Error, FormData>((user: FormData) =>
    service.update(user)
  );
}
function useDeleteUser() {
  return useMutation<User, Error, string>((userId: string) =>
    service.remove(userId)
  );
}

export { useCreateUser, useDeleteUser, useUpdateUser, useGetUser };
