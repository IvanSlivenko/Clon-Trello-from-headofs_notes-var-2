import { NextResponse } from "next/server";
import { updateBoardDTO } from "../dto";
import { prisma } from "@/core/prisma";
import { success } from "zod";

interface BoardRoutedContext {
  params: {
    id: string;
  };
}

// export async function PUT(req: Request, { params }: BoardRoutedContext) {
//   const { id } = params;

export async function PUR(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✅ тепер асинхронно

  const boduRaw = await req.json();
  const validateBody = updateBoardDTO.safeParse(boduRaw);

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

// export async function DELETE(req: Request, { params }: BoardRoutedContext) {
//   const { id } = params;

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✅ тепер асинхронно

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
