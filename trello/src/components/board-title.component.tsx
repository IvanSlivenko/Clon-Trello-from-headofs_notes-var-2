"use client";

import { useBoardQuery } from "@/hooks/use-board-query";

interface BoardTitleProps {
  boardId: string;
}

export function BoardTitle({ boardId }: BoardTitleProps) {
  const { data } = useBoardQuery({ boardId });
  return (
    <h1 className="text-white text-4xl text-center mb-8">{data?.title}</h1>
  );
}
