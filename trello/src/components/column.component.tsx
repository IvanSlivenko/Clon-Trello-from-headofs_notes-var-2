"use client";

import { ColumnPayload, useColumnQuery } from "@/hooks/use-column-query";
// import { Columns } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useState, DragEvent, useRef } from "react";

interface ColumnProps {
  // column: Columns;
  column: ColumnPayload;
}

const MIN_WIDTH = 200;

export function Column({ column }: ColumnProps) {
  const {} = useColumnQuery({ initialData: column });

  const initialDraX = useRef<number>(0);
  const [width, setWidth] = useState(column.width);

  const onResizeStart = (e: DragEvent<HTMLDivElement>) => {
    initialDraX.current = e.clientX;
  };

  const onResize = (e: DragEvent<HTMLDivElement>) => {
    const movedBy = e.clientX - initialDraX.current;
    if (e.clientX === 0) return;
    initialDraX.current = e.clientX;
    // setWidth((width) => width + movedBy);
    setWidth((width) => {
      const newWidth = width + movedBy;
      if (newWidth < MIN_WIDTH) return MIN_WIDTH;
      return newWidth;
    });
  };

  return (
    <div
      className="block h-full w-full p-4 border rounded-lg shadow-sm bg-gray-800 border-gray-700 relative"
      style={{
        minWidth: `${width}px`,
        width: `${width}px`,
      }}
    >
      <div>
        {/* <div className="relative"> */}
        <h5 className="text-lg font-bold tracking-tight text-white">
          {column.title}
        </h5>
        <div
          // className="absolute right-0 top-0 cursor-move w-px h-full bg-gray-700  rounded-lg border border-0 my-[5px] "
          // className="absolute right-0 top-0 cursor-move w-1 h-full bg-gray-700 rounded-lg border border-0 my-[1px]"
          className="absolute right-0 top-[0.1rem] bottom-[0.1rem] cursor-move w-1 bg-gray-700 rounded-lg border border-0 my-[1px] hover:w-[5px] select-none "
          draggable
          onDragStart={onResizeStart}
          onDrag={onResize}
        ></div>
      </div>
    </div>
  );
}
