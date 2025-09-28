import { prisma } from "@/core/prisma";
import { NextResponse } from "next/server";
import { createColumnDto } from "./dto";

export async function GET(req: Request) {
  const columns = await prisma.columns.findMany();
  return NextResponse.json(columns);
}

export async function POST(req: Request) {
  const bodyRaw = await req.json();
  const validateBody = createColumnDto.safeParse(bodyRaw);

  if (!validateBody.success) {
    return NextResponse.json(validateBody.error.issues, {
      status: 400,
    });
  }

  const { title, boardId, width } = validateBody.data;

  const lastColumn = await prisma.columns.findFirst({
    where: {
      boardId: boardId,
    },
    orderBy: {
      order: "desc",
    },
  });

  const newColumn = await prisma.columns.create({
    data: {
      title,
      boardId,
      width,
      order: lastColumn ? lastColumn.order + 1 : 0,
    },
  });

  return NextResponse.json(newColumn);
}
