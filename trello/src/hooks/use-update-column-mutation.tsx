import { UpdateColumnDto } from "@/app/api/columns/dto";
import { api } from "@/core/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Columns } from "@prisma/client";
// import { ColumnPayload } from "./use-column-query";

const updateColumnFn = async (columnId: string, data: UpdateColumnDto) => {
  const { data: column } = await api.patch<Columns>(
    `api/columns/${columnId}`,
    data
  );
  return column;
};

export const useUpdateColumnMutation = () => {
  // const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: { columnId: string; data: UpdateColumnDto }) =>
      updateColumnFn(data.columnId, data.data),
    // onSuccess: (updatedColumn) => {
    //   queryClient.setQueryData<ColumnPayload>(
    //     ["column", updatedColumn.id],
    //     (oldColumn) => ({
    //       ...oldColumn!,
    //       updatedColumn,
    //     })
    //   );
    // },
  });

  return mutation;
};
