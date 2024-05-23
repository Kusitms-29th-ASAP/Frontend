import axios from "axios";

const accessToken = localStorage.getItem("access_token");

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json;charset=UTF-8",
  },
});
export default Axios;
