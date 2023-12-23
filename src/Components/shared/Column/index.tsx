import { Draggable } from 'react-beautiful-dnd';
import { Task } from '../../hooks/useTask';

interface ColumnProps {
  item: Task;
  index: number;
}

export const Column: React.FC<ColumnProps> = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {provided => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <div className="bg-coconut-faded mt-15 p-4 rounded-md">
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
          </div>
        </div>
      )}
    </Draggable>
  );
};
