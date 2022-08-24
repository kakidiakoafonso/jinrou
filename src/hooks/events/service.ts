import api from "../../service/api";

export async function getAll(): Promise<Evento[]> {
  return api.get(`events`).then((response) => response.data);
}
export async function getOne(eventId: string): Promise<Evento> {
  // return api.get(`events/${eventId}`).then((response) => response.data);
  return api
    .get(`events/f2043a9f-1f31-4a78-b0f8-00b52fdc8450`)
    .then((response) => response.data);
}
export async function remove(eventId: string): Promise<Evento> {
  return api.delete(`events/${eventId}`).then((response) => response.data);
}
export async function getPurchases(): Promise<Evento[]> {
  console.log("executando getPurchases");

  return api
    .delete(`events/purchases`)
    .then((response) => {
      const dados = response.data;
      console.log(dados);

      return dados;
    })
    .catch((error) => console.log(error));
}
export async function create(event: FormData): Promise<Evento> {
  return api
    .post("events", event, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
}
