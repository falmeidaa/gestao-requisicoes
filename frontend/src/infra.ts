import axios from "axios";

export const axiosService = axios.create({
  baseURL: "http://localhost:3002",
});