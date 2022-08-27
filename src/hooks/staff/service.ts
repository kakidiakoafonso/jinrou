import api from "../../service/api";
const defaultid = "908c9374-f266-46e4-a4d2-b3b9c569c44a";

export async function getOne(staffID: string): Promise<Staff> {
  return api.get(`staff/${staffID}`).then((response) => response.data);
}
export async function remove(staffID: string): Promise<Staff> {
  return api.delete(`staff/${staffID}`).then((response) => response.data);
}
export async function create(staff: FormData): Promise<Staff> {
  return api
    .post("staff", staff, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
}
export async function update(staff: FormData): Promise<Staff> {
  return api
    .patch("staff", staff, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
}
