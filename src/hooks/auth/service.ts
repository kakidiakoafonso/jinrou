import api from "../../service/api";

export async function userLogin(user: Credentials): Promise<User> {
  return api.post("user/login", user).then((response) => response.data);
}
export async function staffLogin(user: Credentials): Promise<Staff> {
  return api.post("staff/login", user).then((response) => response.data);
}
