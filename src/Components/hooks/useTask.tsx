import { useQuery } from '@tanstack/react-query';
import { axios } from '../utils/utils';

export const useTask = (id: string) => {
  const {
    data: tasks = null,
    isLoading,
    isRefetching,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['task', id],
    queryFn: async () => {
      try {
        const res = await axios.get('/task/get/' + id);

        return res.data || {};
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  });

  return { tasks, isLoading, isRefetching, isError, refetch };
};
