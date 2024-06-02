import deleteUser from "@/apis/auth/deleteUser";
import { useMutation, useQueryClient } from "react-query";

interface UseDeleteUser {
  mutate: () => void;
}

export function useDeleteUser(refreshToken: string): UseDeleteUser {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => deleteUser(refreshToken), {
    onSuccess: () => {
      queryClient.invalidateQueries("refreshToken");
    },
  });
  return { mutate };
}
