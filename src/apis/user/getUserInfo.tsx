import Axios from "../axios";
import { User } from "@/interface/User";

interface UserInfoResponse {
  user: User;
}

export async function getUserInfo(): Promise<UserInfoResponse> {
  const response = await Axios.get(`/api/v1/users`);
  return response.data;
}

export default getUserInfo;
