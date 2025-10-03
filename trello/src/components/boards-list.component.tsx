"use client";

import { BoardCard } from ".";
import { Boards } from "../../generated/prisma/client";
import { CreateBoard } from "./create-board.component";

import { ResponsiveGrid } from "./ResponsiveGrid";
import { useBoards } from "@/hooks/use-boards";

interface BoardsList {
  initialData: Boards[];
}

export function BoardsList({ initialData }: BoardsList) {
  const { data: boards } = useBoards({ initialData });
  //   const { data: boards, isLoading, isError } = useBoards({ initialData });

  return (
    <ResponsiveGrid>
      {boards?.map((board) => (
        <BoardCard key={board.id} id={board.id} title={board.title} />
      ))}
      <CreateBoard />
    </ResponsiveGrid>
  );
}
