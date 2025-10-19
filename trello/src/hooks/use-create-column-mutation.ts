import { BoardCard } from ".";
import { CreateColumn } from "@/components/create-column.component";
import { Columns } from "@prisma/client";
import { createColumnDto as CreateColumnDtoOriginal } from "@/app/api/columns/dto";
import { api } from "@/core/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useBoardsQueryKey } from "./use-boards-query";
import { BoardPayload } from "./use-board-query";

type CreateColumnDto = Omit<CreateColumnDtoOriginal, "width">;

const createColumnFn = async (column: CreateColumnDto) => {
  const { data } = await api.post<Columns>("api/columns", column);
  return data;
};

interface UseCreateColumnMutationOptions {
  boardId: string;
}

export const useCreateColumnMutation = ({
  boardId,
}: UseCreateColumnMutationOptions) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createColumnFn,
    onSuccess: (newColumn) => {
      // onMutate: (newColumn) => {
      const data = queryClient.getQueryData<BoardPayload>(["board", boardId]);

      if (!data) {
        return;
      }

      // const columns = data.columns ?? [];
      const columns = [...data.columns];
      columns.push({
        ...newColumn,
        cards: [],
      });
      // console.log(columns);
      queryClient.setQueryData<BoardPayload>(["board", boardId], (old) => ({
        ...old!,
        columns,
      }));
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries(useBoardsQueryKey);
    // },
  });
  return mutation;
};
