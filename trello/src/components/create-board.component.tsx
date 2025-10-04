import z from "zod";
import { Input } from "./input.component";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const createBoardsSchema = z.object({
  title: z.string().max(20),
});

type CreateBoardValues = z.infer<typeof createBoardsSchema>;

export function CreateBoard() {
  const { register, handleSubmit } = useForm<CreateBoardValues>({
    resolver: zodResolver(createBoardsSchema),
  });

  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });

  return (
    <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        + Create a new board
      </h5>
      <form onSubmit={onSubmit}>
        <Input {...register("title")} />
      </form>
    </div>
  );
}
