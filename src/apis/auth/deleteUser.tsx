import Axios from "../axios";

export async function deleteUser(refreshToken: string): Promise<void> {
  await Axios.delete("/api/v1/auth/logout", {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
}

export default deleteUser;
