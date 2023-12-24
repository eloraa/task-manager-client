import { ReactNode } from 'react';
import toast from 'react-hot-toast';

export const ConfirmToast = (children: ReactNode, color?: string) => {
  return new Promise<void>((resolve, reject) => {
    toast.custom(
      t => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-3xl w-full bg-coconut-faded z-10 py-4 text-sm px-8 flex items-center justify-between flex-wrap gap-4 border border-rose-600/30 font-grotesk`}
        >
          <div className="font-medium text-sm">{children}</div>
          <div className="flex items-center">
            <button
              className={`${color ? '' : 'bg-rose-600'} py-2 px-6 rounded font-mono font-semibold text-sm text-white`}
              style={{ backgroundColor: color }}
              onClick={() => {
                resolve();
                toast.dismiss(t.id);
              }}
            >
              Yes
            </button>
            <button
              className="py-2 px-6 rounded-full font-mono font-semibold text-sm"
              onClick={() => {
                reject();
                toast.dismiss(t.id);
              }}
            >
              No
            </button>
          </div>
        </div>
      ),
      { duration: Infinity }
    );
  });
};
