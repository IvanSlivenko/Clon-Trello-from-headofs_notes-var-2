import { NextResponse } from "next/server";
import { updateBoardDto } from "../dto";
import { prisma } from "@/core/prisma";

interface BoardRoutedContext {
  params: {
    id: string;
  };
}

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
  // { params }: BoardRoutedContext
) {
  const { id } = await context.params;
  // const { id } = params;

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
    return NextResponse.json([
      {
        code: "not_found",
        messages: "Board bot found",
      },
    ]);
  }
  return NextResponse.json(board);
}

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
  // { params }: BoardRoutedContext
) {
  const { id } = await context.params; // ✅ тепер асинхронно
  // const { id } = params;

  const boduRaw = await req.json();
  const validateBody = updateBoardDto.safeParse(boduRaw);

  if (!validateBody.success) {
    return NextResponse.json(validateBody.error.issues, {
      status: 400,
    });
  }

  const findBoard = await prisma.boards.findUnique({
    where: {
      id: id,
    },
  });

  if (!findBoard) {
    return NextResponse.json([
      {
        code: "not_found",
        messages: "Bord not found",
      },
    ]);
  }

  const updatedBoard = await prisma.boards.update({
    where: {
      id: id,
    },
    data: validateBody.data,
  });

  return NextResponse.json(updatedBoard);
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
  // { params }: BoardRoutedContext
) {
  const { id } = await context.params; // ✅ тепер асинхронно
  // const { id } = params;

  const findBoard = await prisma.boards.findUnique({
    where: {
      id: id,
    },
  });

  if (!findBoard) {
    return NextResponse.json([
      {
        code: "not_found",
        messages: "Board not found",
      },
    ]);
  }

  await prisma.boards.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json(
    { message: "Board deleted successfully" },
    { status: 200 }
  );
}
