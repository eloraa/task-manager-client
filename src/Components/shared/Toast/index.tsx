import { ReactNode } from 'react';
import toast from 'react-hot-toast';

export const Toast = (children: ReactNode, { duration = 2000, isError = false, className = '' } = {}) => {
  return toast.custom(
    t => (
      <div
        className={`${t.visible ? 'animate-enter' : 'animate-leave'} z-[] max-w-xl w-full bg-coconut-faded pointer-events-auto py-4 font-medium px-8 max-md:text-xs text-sm font-grotesk border border-gray-white ${isError ? 'text-red' : ''} ${className}`}
        onClick={() => toast.dismiss(t.id)}
      >
        {children}
      </div>
    ),
    {
      id: Array.from({ length }, () => String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1)) + 33)).join(''),
      duration: duration,
    }
  );
};
