import axios from "axios";

const api = axios.create({
  baseURL: "http://jinrou-api.herokuapp.com",
});

export default api;
