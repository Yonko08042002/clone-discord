import axios from "axios";
// import { getToken, removeToken, setToken } from './storage';

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const request = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  withCredentials: true,
});
