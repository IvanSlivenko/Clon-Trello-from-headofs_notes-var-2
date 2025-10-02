"use client";

import { BoardCard } from "@/components";
import { BreakpointTest } from "@/components/BreakpointTest";
import { useEffect, useState } from "react";

export default function Home() {
  const [cols, setCols] = useState("grid-cols-1");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // console.log(width);

      if (width >= 1536) {
        setCols("grid-cols-5");
      } else if (width >= 1280) {
        setCols("grid-cols-4"); // lg
      } else if (width >= 1024) {
        setCols("grid-cols-3"); // lg
      } else if (width >= 640) {
        setCols("grid-cols-2"); // md
      } else {
        setCols("grid-cols-1"); // sm
      }
    };

    handleResize(); // виклик при монтуванні
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container mx-auto">
      <div className={`grid gap-4 ${cols}`}>
        <BoardCard id="1" title="test" />
      </div>
    </div>
  );
}
