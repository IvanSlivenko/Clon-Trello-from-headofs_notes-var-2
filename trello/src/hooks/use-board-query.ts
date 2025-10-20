import { api } from "@/core/api";
import { Prisma } from "@prisma/client";
import { useBoardsQueryKey } from "./use-boards-query";
import { useQueries, useQuery } from "@tanstack/react-query";

export type BoardPayload = Prisma.BoardsGetPayload<{
  include: { columns: { include: { cards: true } } };
}>;

const getBoardFn = async (boardId: string) => {
  const { data } = await api.get<BoardPayload>(`/api/boards/${boardId}`);
  return data;
};

interface UseBoardsQueryOptions {
  initialData: BoardPayload;
}

export const useBoardQuery = ({ initialData }: UseBoardsQueryOptions) => {
  const query = useQuery({
    queryKey: ["board", initialData.id],
    queryFn: () => getBoardFn(initialData.id),
    initialData,
    // placeholderData: initialData,
  });

  return query;
};
