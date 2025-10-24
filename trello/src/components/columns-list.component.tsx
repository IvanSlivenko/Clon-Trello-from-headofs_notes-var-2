"use client";
import { useBoardQuery, BoardPayload } from "@/hooks/use-board-query";
import { CreateColumn } from "./create-column.component";
import { Column } from "./column.component";
import { BoardTitle } from "./board-title.component";

interface ColumnsListProps {
  board: BoardPayload;
}

export function ColumnsList({ board }: ColumnsListProps) {
  const { data } = useBoardQuery({ initialData: board });

  return (
    <>
      <div className="container mx-auto">
        <BoardTitle boardId={board.id} />
      </div>
      <div className="flex h-[80vh] gap-8  overflow-x-scroll w-full h-content px-40 pb-5">
        {data.columns.map((column) => {
          return <Column key={`column-${column.id}`} column={column} />;
        })}
        <CreateColumn boardId={board.id} />
      </div>
    </>
  );
}
