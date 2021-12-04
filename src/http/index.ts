import axios, { AxiosRequestConfig } from "axios";

export const API_URL = "http://localhost:5000/auth";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.headers) config.headers = {};
  else config.headers.Authorization = `${localStorage.getItem("atoken")}`;
  return config;
});

export default $api;
