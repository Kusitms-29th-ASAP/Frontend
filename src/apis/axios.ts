import axios from "axios";

const token = localStorage.getItem("accessToken");

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Authorization: `Bearer sCVfNuhgV6JRQ3AKSPxo4I_ebe4q6K2kouQKKiUQAAABj1PGCQXE017PSiBv1Q`,
    "Content-Type": "application/json",
  },
});
export default Axios;
