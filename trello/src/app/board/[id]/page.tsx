// "use client";

import { BoardTitle } from "@/components";
import { ColumnsList } from "@/components/columns-list.component";
import { prisma } from "@/core/prisma";
import { notFound } from "next/navigation";

interface PageParams {
  id: string;
}

interface PageProps {
  params: Promise<PageParams>;
}
export default async function BoardPage({ params }: PageProps) {
  const { id } = await params; // ✅ обов’язково await
  const board = await prisma.boards.findUnique({
    where: {
      id: id,
    },
    include: {
      columns: {
        orderBy: {
          order: "asc",
        },
        include: {
          cards: true,
        },
      },
    },
  });

  if (!board) {
    return notFound();
  }

  return (
    <>
      <div className="container mx-auto">
        <BoardTitle title={board.title} />
      </div>
      <ColumnsList board={board} />
    </>
  );
}
