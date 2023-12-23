import { useQuery } from '@tanstack/react-query';
import { axios } from '../utils/utils';
import { ColumnType } from '../shared/Board';

export interface Task {
  id: string;
  status: string;
  title: string;
  description: string;
  date: string;
  priority: string;
}

export const useTask = (id: string) => {
  const {
    data = null,
    isLoading,
    isRefetching,
    isError,
    refetch,
  } = useQuery<Task[], Error>({
    queryKey: ['task', id],
    queryFn: async () => {
      try {
        const res = await axios.get<Task[]>('/task/get/' + id);
        return res.data || [];
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
  });

  console.log(data);

  const tasks: Record<string, ColumnType> = {
    '1': {
      title: 'To-do',
      items: data ? data.filter(task => task.status.toLowerCase() === 'to-do') : [],
    },
    '2': {
      title: 'Ongoing',
      items: data ? data.filter(task => task.status.toLowerCase() === 'ongoing') : [],
    },
    '3': {
      title: 'Completed',
      items: data ? data.filter(task => task.status.toLowerCase() === 'completed') : [],
    },
  };

  return { tasks, isLoading, isRefetching, isError, refetch };
};
