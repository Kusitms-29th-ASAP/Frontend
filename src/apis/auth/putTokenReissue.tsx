import Axios from "../axios";

export async function putTokenReissue(refreshToken: string): Promise<void> {
  await Axios.put("/api/v1/auth/reissue", {
    refreshToken: refreshToken,
  });
}

export default putTokenReissue;
