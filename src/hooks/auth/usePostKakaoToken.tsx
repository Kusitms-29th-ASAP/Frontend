import postKakaoToken from "@/apis/auth/postKakaoToken";
import { useMutation, useQueryClient } from "react-query";

interface usePostKakaoToken {
  mutate: () => void;
}

export function usePostKakaoToken(accessToken: string): usePostKakaoToken {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    "accessToken",
    () => postKakaoToken(accessToken),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    }
  );
  return { mutate };
}
