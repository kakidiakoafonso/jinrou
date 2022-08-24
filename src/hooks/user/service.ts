import api from "../../service/api";

export async function GetUser() {
  api.get("").then((response) => response.data);
}
