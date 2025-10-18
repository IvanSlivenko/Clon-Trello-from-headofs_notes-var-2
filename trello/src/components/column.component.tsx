"use client";

import { Columns } from "@prisma/client";
import { useState, DragEvent, useRef } from "react";

interface ColumnProps {
  column: Columns;
}

export function Column({ column }: ColumnProps) {
  const initialDraX = useRef<number>(0);

  // const [initialDraX, setInitialDragX] = useState(0);
  const [width, setWidth] = useState(column.width);

  const onResizeStart = (e: DragEvent<HTMLDivElement>) => {
    // console.log("resize start", e);
    // setInitialDragX(e.clientX);
    // console.log(e);

    initialDraX.current = e.clientX;
  };

  const onResize = (e: DragEvent<HTMLDivElement>) => {
    const movedBy = e.clientX - initialDraX.current;
    if (e.clientX === 0) return;

    // setInitialDragX(e.clientX);
    // console.log("movedBy", movedBy);
    initialDraX.current = e.clientX;
    setWidth((width) => width + movedBy);
  };

  return (
    <div
      className="block h-full w-full p-4 border rounded-lg shadow-sm bg-gray-800 border-gray-700"
      style={{
        minWidth: `${width}px`,
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
