import { prisma } from "@/core/prisma";
import { NextResponse } from "next/server";
import { updateCardDTO } from "../dto";

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const boduRaw = await req.json();
  const validateBody = updateCardDTO.safeParse(boduRaw);

  if (!validateBody.success) {
    return NextResponse.json(validateBody.error.issues, {
      status: 400,
    });
  }

  const findCart = await prisma.cards.findUnique({
    where: {
      id: id,
    },
  });

  if (!findCart) {
    return NextResponse.json([
      {
        code: "not_found",
        messages: "Card not found",
      },
    ]);
  }

  //   const { title, description} = validateBody.data;

  const card = await prisma.cards.update({
    where: {
      id: id,
    },
    data: validateBody.data,
  });

  return NextResponse.json(card);
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✅ тепер асинхронно

  const findCard = await prisma.cards.findUnique({
    where: {
      id: id,
    },
  });

  if (!findCard) {
    return NextResponse.json([
      {
        code: "not_found",
        messages: "Card not found",
      },
    ]);
  }

  await prisma.cards.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json(
    { message: "Card deleted successfully" },
    { status: 200 }
  );
}
