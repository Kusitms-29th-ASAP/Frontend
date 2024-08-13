import { PostUserRequest, TokenResponse } from "@/interface/Auth";
import axios from "axios";

export async function postUser(user: PostUserRequest): Promise<TokenResponse> {
  try {
    const response = await axios.post<TokenResponse>(
      "https://api.schoolpoint.site/api/v1/users",
      user
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to register user: " + error);
  }
}

export default postUser;
