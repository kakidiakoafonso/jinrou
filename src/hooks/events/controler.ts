import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import * as service from "./service";

function useGetEvents() {
  return useQuery<Evento[], Error, Evento[]>(["getEvents"], () =>
    service.getAll()
  );
}
function useGetOneEvent(userId: string) {
  return useQuery<Evento, Error, Evento, string>([userId], () =>
    service.getOne(userId)
  );
}
function useCreateEvent() {
  return useMutation<Evento, Error, FormData>((evento: FormData) =>
    service.create(evento)
  );
}
function useDeleteEvent() {
  return useMutation<Evento, Error, string>((eventoId: string) =>
    service.remove(eventoId)
  );
}
function useEventsPurchases() {
  return useQuery<Evento[], Error>(["useEventsPurchases"], () =>
    service.getPurchases()
  );
}

export {
  useGetEvents,
  useCreateEvent,
  useGetOneEvent,
  useDeleteEvent,
  useEventsPurchases,
};
