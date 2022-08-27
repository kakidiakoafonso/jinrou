import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import * as service from "./service";

function useGetStaff(staffId: string) {
  return useQuery<Staff, Error, Staff, string>([staffId], () =>
    service.getOne(staffId)
  );
}
function useCreateStaff() {
  return useMutation<Staff, Error, FormData>((staff: FormData) =>
    service.create(staff)
  );
}
function useUpdateStaff() {
  return useMutation<Staff, Error, FormData>((staff: FormData) =>
    service.update(staff)
  );
}
function useDeleteStaff() {
  return useMutation<Staff, Error, string>((staffId: string) =>
    service.remove(staffId)
  );
}

export { useCreateStaff, useDeleteStaff, useUpdateStaff, useGetStaff };
