import { prisma } from "@/core/prisma";
import { NextResponse } from "next/server";
import { updateColumnDTO } from "../dto";

interface ColumnRouteContext {
  params: {
    id: string;
  };
}

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const boduRaw = await req.json();
  const validateBody = updateColumnDTO.safeParse(boduRaw);

  if (!validateBody.success) {
    return NextResponse.json(validateBody.error.issues, {
      status: 400,
    });
  }

  const { title, width } = validateBody.data;

  const findColumn = await prisma.columns.update({
    where: {
      id: id,
    },
    data: {
      title,
      width,
    },
  });

  return NextResponse.json(findColumn);
}

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
