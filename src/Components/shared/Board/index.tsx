import React from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { Column } from '../Column';
import { Loader } from '../../utils/Loader';
import { Task } from '../../hooks/useTask';
import { QueryObserverResult } from '@tanstack/react-query';
import { TaskData } from '../TaskForm';

export interface ColumnType {
  title: string;
  items: Task[];
}

interface BoardProps {
  tasks: Record<string, ColumnType>;
  refetch: () => Promise<QueryObserverResult<TaskData, Error>>;
}

export const Board: React.FC<BoardProps> = ({ tasks, refetch }) => {
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = tasks[source.droppableId];
      const destColumn = tasks[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
    } else {
      const column = tasks[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
    }
  };

  if (!tasks) return <Loader></Loader>;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(tasks).map(([columnId, column]) => (
          <Droppable key={columnId} droppableId={columnId}>
            {provided => (
              <div className="grid gap-4 h-[50vh] auto-rows-max overflow-y-auto no-scroll" ref={provided.innerRef} {...provided.droppableProps}>
                <div className="sticky top-0 p-4 bg-white">
                  <h1 className="font-grotesk flex items-center gap-2">
                    <div
                      className="w-2 h-2 bg-blue-main rounded-full"
                      style={{
                        backgroundColor: column.title.toLowerCase() === 'ongoing' ? '#617200' : column.title.toLowerCase() === 'completed' ? '#780a2c' : '',
                      }}
                    ></div>
                    {column.title}
                  </h1>
                </div>
                {column.items.map((item, index) => (
                  <Column refetch={refetch} key={item.id} item={item} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};
