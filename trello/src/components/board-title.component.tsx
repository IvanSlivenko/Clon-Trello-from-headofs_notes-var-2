"use client";

import { useUpdateBoardMutation } from "@/hooks/use-update-board-mutation";
import clsx from "clsx";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface BoardTitleProps {
  // title: string;
  boardId: string;
}

export function BoardTitle({ boardId }: BoardTitleProps) {
  const [isEditing, setIsEditing] = useState(false);
  // const [localTitle, setLocalTitle] = useState(title);

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

  const { mutate } = useUpdateBoardMutation();

  const onBlur = () => {
    setIsEditing(false);
    mutate({
      boardId: boardId,
      data: {
        title: {
          titleRef.current?.innerText || "",
        }
      }
    })
  };

  // const onBlur = () => {
  //   setIsEditing(false);
  //   const newTitle = titleRef.current?.innerText.trim() || "";
  //   if (newTitle && newTitle !== title) {
  //     mutate({
  //       boardId,
  //       data: { title: newTitle },
  //     });
  //   }
  // };

  // const handleBlur = () => {
  //   setIsEditing(false);
  //   if (localTitle.trim() !== title) {
  //     mutate({
  //       boardId,
  //       data: { title: localTitle },
  //     });
  //   }
  // };

  return (
    <h1
      className={twMerge(
        "text-white text-4xl text-center mb-8 font-bold transition outline-none  hover:bg-black/20",
        titleClasses
      )}
      contentEditable={isEditing}
      onClick={turnOnEditing}
      ref={titleRef}
      // onBlur={() => {
      //   setIsEditing(false);
      // }}
      onBlur={onBlur}
    >
      {title}
    </h1>
  );

  // return isEditing ? (
  //   <input
  //     autoFocus
  //     value={localTitle}
  //     onChange={(e) => setLocalTitle(e.target.value)}
  //     onBlur={handleBlur}
  //     className="text-white text-4xl text-center mb-8 font-bold bg-transparent outline-none border-b border-gray-500"
  //   />
  // ) : (
  //   <h1
  //     className={twMerge(
  //       "text-white text-4xl text-center mb-8 font-bold transition outline-none hover:bg-black/20",
  //       titleClasses
  //     )}
  //     onClick={turnOnEditing}
  //     ref={titleRef}
  //   >
  //     {localTitle}
  //   </h1>
  // );
}
