import { TokenResponse } from "@/interface/Auth";
import Axios from "../axios";

interface PutUserInfoRequest {
  userName: string;
  phoneNumber: {
    number: string;
  };
}

export async function putUserInfo(userInfo: PutUserInfoRequest): Promise<void> {
  try {
    await Axios.put<TokenResponse>("/api/v1/users", {
      userInfo,
    });
  } catch (error) {
    throw new Error("Failed to: " + error);
  }
}

export default putUserInfo;
