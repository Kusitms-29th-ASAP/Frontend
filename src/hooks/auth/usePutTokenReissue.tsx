import putTokenReissue from "@/apis/auth/putTokenReissue";
import { useMutation, useQueryClient } from "react-query";

interface UsePutTokenReissue {
  mutate: () => void;
}

export function usePutTokenReissue(refreshToken: string): UsePutTokenReissue {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => putTokenReissue(refreshToken), {
    onSuccess: () => {
      queryClient.invalidateQueries("refreshToken");
    },
  });
  return { mutate };
}
