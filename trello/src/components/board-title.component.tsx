"use client";

import clsx from "clsx";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface BoardTitleProps {
  title: string;
}

export function BoardTitle({ title }: BoardTitleProps) {
  const [isEditing, setIsEditing] = useState(false);
  const turnOnEditing = () => {
    if (isEditing) {
      return;
    }
    setIsEditing(true);
  };

  const titleRef = useRef<HTMLHeadElement>(null);

  const titleClasses = clsx({
    "cursor-pointer": !isEditing,
    "cursor-text": isEditing,
  });

  return (
    <h1
      className={twMerge(
        "text-white text-4xl text-center mb-8 font-bold transition outline-none  hover:bg-black/20",
        titleClasses
      )}
      contentEditable={isEditing}
      onClick={turnOnEditing}
      ref={titleRef}
    >
      {title}
    </h1>
  );
}
