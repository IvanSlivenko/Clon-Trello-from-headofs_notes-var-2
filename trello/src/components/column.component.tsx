import { Columns } from "@prisma/client";

interface ColumnProps {
  column: Columns;
}

export function Column({ column }: ColumnProps) {
  const onResizeStart = (e) => {
    console.log("resize start", e);
  };

  return (
    <div
      className="block h-full w-full p-4 border rounded-lg shadow-sm bg-gray-800 border-gray-700"
      style={{
        minWidth: column.width,
        width: column.width,
        //   width: 700,
        //   minWidth: 700,
      }}
    >
      <div className="relative">
        <h5 className="text-lg font-bold tracking-tight text-white">
          {column.title}
        </h5>
        <div
          className="absolute right-0 top-0 "
          draggable
          onDragStart={onResizeStart}
        >
          move
        </div>
      </div>
    </div>
  );
}
