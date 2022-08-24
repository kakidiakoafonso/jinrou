import api from "../../service/api";
const defaultid = "908c9374-f266-46e4-a4d2-b3b9c569c44a";

export async function getOne(userID: string): Promise<User> {
  return api.get(`user/${userID}`).then((response) => response.data);
}
export async function remove(userID: string): Promise<User> {
  return api.delete(`user/${userID}`).then((response) => response.data);
}
export async function create(user: FormData): Promise<User> {
  return api
    .post("user", user, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
}
export async function update(user: FormData): Promise<User> {
  return api
    .patch("user", user, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
}
