import { updateBoardDTO } from "./../boards/dto";
import z from "zod";

export const createCardDto = z.object({
  title: z.string().min(1),
  columnId: z.string().uuid(),
});

export const updateCardDTO = createCardDto
  .extend({
    description: z.string().nullable(),
  })
  .partial();
