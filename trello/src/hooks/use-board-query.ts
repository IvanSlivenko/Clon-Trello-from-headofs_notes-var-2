"use client";

import { api } from "@/core/api";
import { Prisma } from "@prisma/client";
import { useBoardsQueryKey } from "./use-boards-query";
import { useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

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
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["board", initialData.id],
    queryFn: () => getBoardFn(initialData.id),
    initialData,
    // placeholderData: initialData,
  });

  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    query.data.columns.forEach((column) => {
      queryClient.setQueryData(["column", column.id], () => column);
    });
  }, [query.data]);

  return query;
};
