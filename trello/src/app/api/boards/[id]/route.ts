import { NextResponse } from "next/server";
import { updateBoardDTO } from "../dto";
import { prisma } from "@/core/prisma";

interface UpdateBoardContext {
  params: {
    id: string;
  };
}

export async function PUT(req: Request, { params }: UpdateBoardContext) {
  const { id } = params;
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
