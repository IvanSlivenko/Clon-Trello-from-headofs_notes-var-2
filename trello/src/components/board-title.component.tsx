"use client";

interface BoardTitleProps {
  title: string;
}

export function BoardTitle({ title }: BoardTitleProps) {
  return (
    <h1
      className="text-white text-4xl text-center mb-8 font-bold hover:bg-black/20 inline-block mx-auto"
      contentEditable={false}
    >
      {title}
    </h1>
  );
}
