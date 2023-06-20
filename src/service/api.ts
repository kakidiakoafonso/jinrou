import axios from "axios";

export const serverURL = "http://jinrou-api.herokuapp.com";
const api = axios.create({
  // baseURL: "http://192.168.1.233:3000",
  baseURL: "http://206.189.205.159:3000",
});

export default api;
