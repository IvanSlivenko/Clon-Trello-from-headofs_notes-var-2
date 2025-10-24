import { UpdateBoardDto } from "@/app/api/boards/dto";
import { BoardPayload } from "./use-board-query";
import { Boards } from "@prisma/client";

const updateBoardFn = async (boardId: string, data: UpdateBoardDto) => {
  const { data: board } = await api.patch<Boards>(
    `/api/boards/${boardId}`,
    data
  );
  return board;
};

export const useUpdateBoardMutation = () => {
  const mutation = useMutation({
    mutationFn: (data: { boardId: string; data: UpdateBoardDto }) =>
      updateBoardFn(data.boardId, data.data),
  });

  return mutation;
};
