import { prisma } from "@/core/prisma";
import { NextResponse } from "next/server";
import { createColumnDto } from "./dto";

// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);
//   const boardId = searchParams.get("boardId");

//   if (!boardId) {
//     return NextResponse.json([
//       {
//         code: "missing_query_param",
//         field: "boardId",
//         message: "Query param boardId is required",
//       },
//       { status: 400 },
//     ]);
//   }

//   const columns = await prisma.columns.findMany({
//     where: {
//       boardId: boardId,
//     },
//     orderBy: {
//       order: "asc",
//     },
//   });

//   return NextResponse.json(columns);
// }

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const boardId = searchParams.get("boardId");
  const searchAll = searchParams.get("searchAll");

  if (boardId) {
    // Повертаємо колонки для конкретної дошки
    const columns = await prisma.columns.findMany({
      where: { boardId },
      orderBy: { order: "asc" },
    });
    return NextResponse.json(columns);
  }

  if (!boardId && !searchAll) {
    return NextResponse.json([
      {
        code: "missing_query_param or searhAll",
        field: "boardId or searhAll",
        message: "Query param boardId  or searhAll is required",
      },
      { status: 400 },
    ]);
  }

  if (!boardId && searchAll) {
    // Якщо boardId не передано — повертаємо всі
    const columns = await prisma.columns.findMany({
      orderBy: [{ boardId: "asc" }, { order: "asc" }],
    });
    return NextResponse.json(columns);
  }
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
