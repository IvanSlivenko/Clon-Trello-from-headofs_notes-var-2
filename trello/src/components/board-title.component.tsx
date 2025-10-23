"use client";

interface BoardTitleProps {
  title: string;
}

export function BoardTitle({ title }: BoardTitleProps) {
  return <h1 className="text-white text-4xl text-center mb-8">{title}</h1>;
}
