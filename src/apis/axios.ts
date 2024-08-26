import axios from "axios";

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
    Authorization: `Bearer ${getToken()}`,
    "Content-Type": "application/json;charset=UTF-8",
    "Accept-Language": `${getLanguage()}`,
  },
});
export default Axios;
