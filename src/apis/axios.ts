import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Authorization: `Bearer ${getToken()}`,
    "Content-Type": "application/json;charset=UTF-8",
  },
});
export default Axios;
