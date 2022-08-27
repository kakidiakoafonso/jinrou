import axios from "axios";

export const serverURL = "http://jinrou-api.herokuapp.com"
const api = axios.create({
  // baseURL: "http://192.168.1.43:3000",
  baseURL: "http://jinrou-api.herokuapp.com",
});

export default api;
