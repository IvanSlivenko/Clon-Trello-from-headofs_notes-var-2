import { NextResponse } from "next/server";
import { updateColumnsOrderDto } from "../dto";

export async function PUT(req: Request) {
  const bodyRaw = await req.json();
  const validateBody = updateColumnsOrderDto.safeParse(bodyRaw);

  if (!validateBody.success) {
    return NextResponse.json(validateBody.error.issues, {
      status: 400,
    });
  }
}
