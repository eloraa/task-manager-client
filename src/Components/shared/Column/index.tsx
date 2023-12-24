import { Draggable } from 'react-beautiful-dnd';
import { Task } from '../../hooks/useTask';
import { Spinner } from '../../utils/Spinner';
import { useState } from 'react';
import { ConfirmToast } from '../ConfirmToast';
import { axios } from '../../utils/utils';
import { Toast } from '../Toast';
import { QueryObserverResult } from '@tanstack/react-query';
import { TaskData, TaskForm } from '../TaskForm';
import { Loader } from '../../utils/Loader';

interface ColumnProps {
  item: Task;
  index: number;
  updating: string;
  refetch: () => Promise<QueryObserverResult<TaskData, Error>>;
}

export const Column: React.FC<ColumnProps> = ({ item, index, refetch, updating }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [popup, setPopup] = useState(false);

  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (isUpdating) return;
    setIsUpdating(true);

    ConfirmToast(
      <>
        Are you sure you want to delete the task <strong className="font-semibold">{item.title}</strong>
      </>
    )
      .then(async () => {
        const { success } = (await axios.delete('/task/delete/' + item.id)).data;
        if (success) {
          Toast('Successfully deleted the task');
          refetch();
          setIsUpdating(false);
        } else setIsUpdating(false);
      })
      .catch(err => {
        setIsUpdating(false);
        console.log(err);
      });
  };
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {provided => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <div className="bg-coconut-faded mt-15 p-4 rounded-md relative">
            {updating === item.id && <Loader className='absolute scale-[.3] bg-transparent'></Loader>}
            <h1 className="font-grotesk font-medium">{item.title}</h1>
            <p className="mt-2 text-sm">{item.description}</p>
            <ul className="grid mt-4 gap-2 text-xs">
              <li className="flex items-center justify-between">
                <span>Priority</span>
                <h4 className="font-semibold text-rose-600">{item.priority}</h4>
              </li>
              <li className="flex items-center justify-between">
                <span>Deadline</span>
                <h4 className="font-semibold">{new Date(item.date).toDateString()}</h4>
              </li>
            </ul>
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={handleDelete}
                className="border-rose-600 border-b border-dashed flex items-center gap-1 text-rose-600 font-grotesk text-xs font-semibold transition-colors hover:bg-rose-600/15 relative"
              >
                <span className={`${isUpdating ? 'opacity-0 flex items-center gap-1' : ' flex items-center gap-1'}`}>
                  <figure className="w-4 h-4">
                    <svg viewBox="0 0 24 24" fill="none" width="24" height="24" role="presentation" focusable="false">
                      <path
                        d="M19.5 7h-4v-.75A2.25 2.25 0 0 0 13.25 4h-2.997a2.25 2.25 0 0 0-2.25 2.255V7H4v1.5h1.591l1.245 9.541A2.256 2.256 0 0 0 9.067 20h5.366a2.256 2.256 0 0 0 2.231-1.959L17.908 8.5H19.5V7Zm-9.997-.75a.75.75 0 0 1 .75-.75h2.997a.75.75 0 0 1 .75.75V7H9.505l-.002-.75Zm5.674 11.595a.75.75 0 0 1-.744.655H9.067a.75.75 0 0 1-.744-.654L7.104 8.5h9.292l-1.219 9.345Z"
                        fill="currentColor"
                        vectorEffect="non-scaling-stroke"
                      ></path>
                    </svg>
                  </figure>
                  Delete
                </span>
                {isUpdating && <Spinner></Spinner>}
              </button>
              <button onClick={() => setPopup(true)} className="flex items-center gap-1 border-b border-black border-dashed transition-colors hover:bg-black/15 font-semibold text-xs">
                <figure className="w-4 h-4">
                  <svg viewBox="0 0 24 24" fill="none" width="24" height="24" role="presentation" focusable="false">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.988 7.139c0 .597-.236 1.169-.657 1.591l-7.114 7.109-4.25.691.692-4.25 7.111-7.11a2.252 2.252 0 0 1 3.182 0l.378.379c.422.422.659.994.659 1.591Zm-1.718-.53-.378-.379a.752.752 0 0 0-1.063 0l-.796.796 1.45 1.43.787-.787a.75.75 0 0 0 0-1.06ZM8.062 13l-.28 1.717 1.718-.279 4.923-4.919-1.45-1.43L8.062 13Z"
                      fill="currentColor"
                      vectorEffect="non-scaling-stroke"
                    ></path>
                    <path d="M5 18h14v1.5H5V18Z" fill="currentColor" vectorEffect="non-scaling-stroke"></path>
                  </svg>
                </figure>
                Edit task
              </button>
            </div>
          </div>
          {popup && <TaskForm refetch={refetch} task={item} setPopup={setPopup}></TaskForm>}
        </div>
      )}
    </Draggable>
  );
};
