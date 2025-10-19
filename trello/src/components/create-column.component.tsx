"use client";

import z from "zod";
import { Input } from "./input.component";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useCreateBoard } from "@/hooks/use-create-board-mutation";
import { useCreateColumnMutation } from "@/hooks/use-create-column-mutation";

const createColumnSchema = z.object({
  title: z.string().min(1).max(20),
});

type CreateColumnValues = z.infer<typeof createColumnSchema>;

interface CreateColumnProps {
  boardId: string;
}

export function CreateColumn({ boardId }: CreateColumnProps) {
  const [isFormOpened, setIsFormOpened] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateColumnValues>({
    resolver: zodResolver(createColumnSchema),
  });

  const { mutateAsync } = useCreateColumnMutation({ boardId });

  const onSubmit = handleSubmit(async (values) => {
    await mutateAsync({
      ...values,
      boardId: boardId,
    });
    setIsFormOpened(false);
  });

  const openForm = () => setIsFormOpened(true);

  return (
    <div
      className="block h-fit min-w-[12.5rem] w-[12.5] p-4 border border-gray-200 rounded-lg shadow-sm  bg-gray-800 border-gray-700 hover:bg-gray-700 cursor-pointer"
      onClick={openForm}
    >
      {isFormOpened ? (
        <form onSubmit={onSubmit}>
          <Input
            {...register("title")}
            placeholder="Enter your column title"
            error={errors.title?.message}
            disabled={isSubmitting}
          />
        </form>
      ) : (
        <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          + Create a new column
        </h5>
      )}
    </div>
  );
}
