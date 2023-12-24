import { useContext, useState } from 'react';
import { TaskForm } from '../../shared/TaskForm';
import { useTask } from '../../hooks/useTask';
import { AuthContext, AuthContextProps } from '../../providers/AuthProvider';
import { Board } from '../../shared/Board';
import { Loader } from '../../utils/Loader';

export const Dashboard = () => {
  const [popup, setPopup] = useState(false);
  const { user } = useContext(AuthContext) as AuthContextProps;
  const { tasks, isLoading, refetch } = useTask(user?.uid || '');
  if (isLoading) return <Loader></Loader>;

  return (
    <main className="px-8 py-10 relative">
      <div className="flex items-center justify-between mb-16">
        <h1 className="font-grotesk text-xl font-semibold">Dashboard</h1>
        <button onClick={() => setPopup(true)} className="flex gap-2 font-grotesk transition-transform active:scale-y-95 items-center font-semibold text-sm text-white bg-blue-main py-2 px-4 rounded">
          <figure className="w-5 h-5">
            <svg viewBox="0 0 24 24" fill="none" width="24" height="24" role="presentation" focusable="false">
              <path d="M11.75 4.5V19M19 11.75H4.5" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path>
            </svg>
          </figure>
          Create new task
        </button>
      </div>
      {/* <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks &&
          tasks.map((task: Task) => (
            <div className="py-10 px-6 bg-coconut-faded rounded-md" key={task.id}>
              <h1 className="text-lg font-grotesk font-semibold">{task.title}</h1>
              <p className="mt-2">{task.description}</p>
              <ul className="grid mt-4 gap-2 text-sm">
                <li className="flex items-center justify-between">
                  <span>Priority</span>
                  <h4 className="font-semibold text-rose-600">{task.priority}</h4>
                </li>
                <li className="flex items-center justify-between">
                  <span>Deadline</span>
                  <h4 className="font-semibold text-rose-600">{new Date(task.date).toDateString()}</h4>
                </li>
              </ul>
            </div>
          ))}
      </div> */}
      <Board refetch={refetch} tasks={tasks}></Board>
      {popup && <TaskForm refetch={refetch} setPopup={setPopup}></TaskForm>}
    </main>
  );
};
