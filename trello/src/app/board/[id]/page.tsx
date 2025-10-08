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
    <div
      className="container mx-auto"
      style={{
        height: "calc(100% - 2.5rem - 4rem - 2.5rem - 2rem)",
      }}
    >
      {/* {JSON.stringify(board, null, 2)} */}
      <h1 className="text-white text-4xl text-center mb-8">{board.title}</h1>
      <div className="flex h-full">
        <div className="block  h-full w-full p-4 border rounded-lg shadow-sm bg-gray-800 border-gray-700">
          <div>
            <h5 className="text-lg font-bold tracking-tight text-white">
              Column name
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
