import api from "../../service/api";

export async function getAll(): Promise<Advantage[]> {
  return api.get("advantage").then((response) => response.data);
}
