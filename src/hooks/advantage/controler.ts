import { useQuery } from "@tanstack/react-query";
import * as service from "./service";
export function useGetAdvantage() {
  return useQuery<Advantage[], Error>(["useGetAdvantage"], () =>
    service.getAll()
  );
}
