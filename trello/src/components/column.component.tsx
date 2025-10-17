"use client";

import { Columns } from "@prisma/client";
import { useState, DragEvent } from "react";

interface ColumnProps {
  column: Columns;
}

export function Column({ column }: ColumnProps) {
  const [initialDraX, setInitialDragX] = useState(0);
  const [width, setWidth] = useState(column.width);

  const onResizeStart = (e: DragEvent<HTMLDivElement>) => {
    console.log("resize start", e);
    setInitialDragX(e.clientX);
  };

  const onResize = (e: DragEvent<HTMLDivElement>) => {
    console.log("resize");
    const movedBy = e.clientX - initialDraX;
    setInitialDragX(e.clientX);
    setWidth(width + movedBy);
  };

  return (
    <div
      className="block h-full w-full p-4 border rounded-lg shadow-sm bg-gray-800 border-gray-700"
      // style={{
      //   // minWidth: column.width,
      //   minWidth: width,
      //   // width: column.width,
      //   width: width,
      //   //   width: 700,
      //   //   minWidth: 700,
      // }}

      // style={{
      //   minWidth: isFinite(column.width) ? `${column.width}px` : "200px", // дефолтне значення
      // }}

      style={{
        minWidth: `${width}px`,
        // minWidth: `${column.width}px`,
        width: `${width}px`,
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
          onDrag={onResize}
        >
          move
        </div>
      </div>
    </div>
  );
}
