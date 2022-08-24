import { useQuery, useMutation } from "@tanstack/react-query";
import * as service from "./service";
export function useGetSupporter() {
  return useQuery<Supporter[], Error>(["useGetSupporter"], () =>
    service.getAll()
  );
}
export function useCreateSupporter() {
  return useMutation<Supporter, Error, FormData>((supporter: FormData) =>
    service.create(supporter)
  );
}
