import { useState } from 'react';
import { TaskForm } from '../../shared/TaskForm';

export const Dashboard = () => {
  const [popup, setPopup] = useState(false);
  return (
    <main className="px-8 py-10">
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
      {popup && <TaskForm setPopup={setPopup}></TaskForm>}
    </main>
  );
};
