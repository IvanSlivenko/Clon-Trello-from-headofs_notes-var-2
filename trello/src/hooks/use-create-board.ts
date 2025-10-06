import { Boards } from "@prisma/client";
import { createBoardDto } from "@/app/api/boards/dto";
import { api } from "@/core/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useBoardsQueryKey } from "./use-boards";

const createBoardFn = async (board: createBoardDto) => {
  const { data } = await api.post<Boards>("api/boards", board);
  return data;
};

export const useCreateBoard = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createBoardFn,
    onSettled: () => {
      queryClient.invalidateQueries(useBoardsQueryKey);
    },
  });
  return mutation;
};
