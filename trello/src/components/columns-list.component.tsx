"use client";
import { useBoardQuery, BoardPayload } from "@/hooks/use-board-query";
import { CreateColumn } from "./create-column.component";

interface ColumnsListProps {
  board: BoardPayload;
}

export function ColumnsList({ board }: ColumnsListProps) {
  const { data } = useBoardQuery({ initialData: board });

  return (
    <div className="flex h-[80vh] gap-8  overflow-x-scroll w-full h-content px-40 pb-5">
      {data.columns.map((column) => {
        return (
          <div
            key={column.id}
            className="block h-full w-full p-4 border rounded-lg shadow-sm bg-gray-800 border-gray-700"
            style={{
              minWidth: column.width,
              width: column.width,
              //   width: 700,
              //   minWidth: 700,
            }}
          >
            <div>
              <h5 className="text-lg font-bold tracking-tight text-white">
                {column.title}
              </h5>
            </div>
          </div>
        );
      })}
      <CreateColumn boardId={board.id} />
    </div>
  );
}
