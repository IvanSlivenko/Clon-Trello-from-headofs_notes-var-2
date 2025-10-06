// "use client";

import { prisma } from "@/core/prisma";
import Link from "next/link";
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
  });

  if (!board) {
    return notFound();
  }

  return (
    <div className="container mx-auto">
      {/* {JSON.stringify(board, null, 2)} */}
      <h1 className="text-white text-4xl text-center">{board.title}</h1>

      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          test title
        </h5>
      </div>
    </div>
  );
}
