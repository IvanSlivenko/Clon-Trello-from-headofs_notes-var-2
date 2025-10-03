"use client";

import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export function ResponsiveGrid({ children }: Props) {
  const [cols, setCols] = useState("grid-cols-1");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1536) {
        setCols("grid-cols-5"); // 2xl
      } else if (width >= 1280) {
        setCols("grid-cols-4"); // xl
      } else if (width >= 1024) {
        setCols("grid-cols-3"); // lg
      } else if (width >= 640) {
        setCols("grid-cols-2"); // sm
      } else {
        setCols("grid-cols-1"); // mobile
      }
    };

    handleResize(); // виклик одразу при монтуванні
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div className={`grid gap-4 ${cols}`}>{children}</div>;
}
