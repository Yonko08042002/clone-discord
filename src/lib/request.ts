import axios from "axios";
// import { getToken, removeToken, setToken } from './storage';

const BASE_URL =
  import.meta.env.VITE_API_URL ||
  import.meta.env.VITE_API_URL1 ||
  "http://localhost:3000/api" ||
  "https://discord-api-seven.vercel.app/api";

export const request = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  withCredentials: true,
});
