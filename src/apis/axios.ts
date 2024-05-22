import axios from "axios";

const token = localStorage.getItem("access_token");
// const token = `eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhc2FwIiwidG9rZW5fdHlwZSI6IkFDQ0VTU19UT0tFTiIsImNsYWltc190eXBlIjoiVVNFUiIsInVzZXJfY2xhaW1zIjp7InVzZXJfaWQiOjI4fSwiaWF0IjoxNzE1OTUyNDUyLCJleHAiOjE3MjU5NTI0NTJ9.P2CcmW2nqXyGNGxbHAJkoSTOnaG_OvV08IFCJvieB4k`;

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json;charset=UTF-8",
  },
});
export default Axios;
