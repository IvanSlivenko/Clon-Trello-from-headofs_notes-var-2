"use client";
import { useBoardsQuery, BoardPayload } from "@/hooks/use-board-query";
import { CreateColumn } from "./create-column.component";
import { Column } from "./column.component";

interface ColumnsListProps {
  board: BoardPayload;
}

export function ColumnsList({ board }: ColumnsListProps) {
  const { data } = useBoardsQuery({ initialData: board });

  return (
    <div className="flex h-[80vh] gap-8  overflow-x-scroll w-full h-content px-40 pb-5">
      {data.columns.map((column) => {
        return <Column key={`column-${column.id}`} column={column} />;
      })}
      <CreateColumn boardId={board.id} />
    </div>
  );
}
