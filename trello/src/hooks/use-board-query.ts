import { api } from "@/core/api";
import { Boards } from "@prisma/client";

const getBoardFn = async (boardId: string) => {
  const { data } = await api.get<Boards[]>(`/api/boards/${boardId}`);
};
