import { NextResponse } from "next/server";
import { createCardDto } from "./dto";
import { prisma } from "@/core/prisma";

export async function POST(req: Request) {
  const bodyRaw = await req.json();
  const validateBody = createCardDto.safeParse(bodyRaw);

  if (!validateBody.success) {
    return NextResponse.json(validateBody.error.issues, {
      status: 400,
    });
  }

  const lastCard = await prisma.cards.findFirst({
    where: {
      columnId: validateBody.data.columnId,
    },
    orderBy: {
      order: "desc",
    },
  });

  const newCard = await prisma.cards.create({
    data: {
      ...validateBody.data,
      order: lastCard ? lastCard.order + 1 : 0,
    },
  });

  return NextResponse.json(newCard);
}
