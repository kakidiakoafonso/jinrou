import api from "../../service/api";

export async function getAll(): Promise<Supporter[]> {
  return api.get("supporter").then((response) => response.data);
}
export async function create(supporter: FormData): Promise<Supporter> {
  return api
    .post("supporter", supporter, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
}
