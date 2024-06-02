import { TokenResponse } from "@/interface/Auth";
import Axios from "../axios";

export async function putTokenReissue(
  refreshToken: string
): Promise<TokenResponse> {
  try {
    const response = await Axios.put<TokenResponse>("/api/v1/auth/reissue", {
      refreshToken: refreshToken,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to reissue token: " + error);
  }
}

export default putTokenReissue;
