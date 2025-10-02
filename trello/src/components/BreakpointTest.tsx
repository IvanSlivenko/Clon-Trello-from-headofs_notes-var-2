"use client";

import { useEffect, useState } from "react";

export function BreakpointTest() {
  const [width, setWidth] = useState(0);
  const [breakpoint, setBreakpoint] = useState("unknown");

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setWidth(w);

      if (w < 640) setBreakpoint("sm");
      else if (w < 768) setBreakpoint("md");
      else if (w < 1024) setBreakpoint("lg");
      else if (w < 1280) setBreakpoint("xl");
      else setBreakpoint("2xl");
    };

    handleResize(); // виклик одразу при монтуванні
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mt-4 p-4 bg-gray-800 text-white rounded">
      <p>Window width: {width}px</p>
      <p>Active breakpoint: {breakpoint}</p>
    </div>
  );
}
