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
  initialData?: BoardPayload;
  boardId: string;
}

export const useBoardQuery = ({
  initialData,
  boardId,
}: UseBoardsQueryOptions) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["board", initialData?.id ?? boardId],
    queryFn: () => getBoardFn(initialData?.id ?? boardId),
    initialData,
    // placeholderData: initialData,
  });

  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    if (!query.data) {
      return;
    }

    query.data.columns.forEach((column) => {
      queryClient.setQueryData(["column", column.id], () => column);
    });
  }, [query.data]);

  return query;
};
