import { BoardCard } from "@/components";
import { ResponsiveGrid } from "@/components/ResponsiveGrid";
import { prisma } from "@/core/prisma";

export default async function Home() {
  const boards = await prisma.boards.findMany();

  return (
    <div className="container mx-auto">
      <ResponsiveGrid>
        {boards.map((board) => (
          <BoardCard key={board.id} id={board.id} title={board.title} />
        ))}
      </ResponsiveGrid>
    </div>
  );
}
