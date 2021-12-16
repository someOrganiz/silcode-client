import axios, { AxiosRequestConfig } from "axios";
import router from "next/router";
import { HOME } from "../utils/routes";

export const API_URL = "http://localhost:5000";

const $apiAuth = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$apiAuth.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.headers) config.headers = {};
  else config.headers.Authorization = `${localStorage.getItem("atoken")}`;
  return config;
});

$apiAuth.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.post(
          `${API_URL}/refresh`,
          {},
          { withCredentials: true }
        );
        localStorage.setItem("atoken", response.data.atoken);
      } catch (error) {
        localStorage.removeItem("atoken");
        router.push(HOME);
      }
    }
    throw error;
  }
);
export default $apiAuth;
