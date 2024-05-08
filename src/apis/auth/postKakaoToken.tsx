import Axios from "../axios";

export async function postKakaoToken(accessToken: string): Promise<void> {
  await Axios.post("/api/v1/auth/KAKAO", accessToken);
}

export default postKakaoToken;
