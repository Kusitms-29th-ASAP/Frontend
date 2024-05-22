import Axios from "../axios";

interface UserInfoResponse {
  userName: string;
  phoneNumber: string;
  email: string;
}

export async function getUserInfo(): Promise<UserInfoResponse> {
  const response = await Axios.get(`/api/v1/users`);
  return response.data;
}

export default getUserInfo;
