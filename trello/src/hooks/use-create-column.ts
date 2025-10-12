import { CreateColumn } from "@/components/create-column.component";
import { Columns } from "@prisma/client";
import { createColumnDto as CreateColumnDtoOriginal } from "@/app/api/columns/dto";
import { api } from "@/core/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useBoardsQueryKey } from "./use-boards";

type CreateColumnDto = Omit<CreateColumnDtoOriginal, "width">;

const createColumnFn = async (column: CreateColumnDto) => {
  const { data } = await api.post<Columns>("api/columns", column);
  return data;
};

export const useCreateColumnMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createColumnFn,
    onSettled: () => {
      queryClient.invalidateQueries(useBoardsQueryKey);
    },
  });
  return mutation;
};
