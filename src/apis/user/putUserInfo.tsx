import { TokenResponse } from "@/interface/Auth";
import Axios from "../axios";

interface PutUserInfoRequest {
  userName: string;
  phoneNumber: {
    number: string;
  };
}

export async function putUserInfo({
  userName,
  phoneNumber,
}: PutUserInfoRequest): Promise<void> {
  try {
    await Axios.put<TokenResponse>("/api/v1/users", {
      userName,
      phoneNumber,
    });
  } catch (error) {
    throw new Error("Failed to: " + error);
  }
}

export default putUserInfo;
