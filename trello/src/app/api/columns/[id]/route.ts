import { prisma } from "@/core/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✅ тепер асинхронно

  const findColumn = await prisma.columns.findUnique({
    where: {
      id: id,
    },
  });

  if (!findColumn) {
    return NextResponse.json([
      {
        code: "not_found",
        messages: "Column not found",
      },
    ]);
  }

  await prisma.columns.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json(
    { message: "Column deleted successfully" },
    { status: 200 }
  );
}
