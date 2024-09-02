import axios, { InternalAxiosRequestConfig } from "axios";

const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("access_token");
  }
  return null;
};

const getLanguage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("language");
  }
  return null;
};

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

Axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getToken();
  const language = getLanguage();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (language) {
    config.headers["Accept-Language"] = language;
  }

  return config;
});

export default Axios;
