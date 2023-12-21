import { twMerge } from 'tailwind-merge';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { className?: string }> = ({ className, ...props }) => {
  return (
    <input
      className={twMerge('w-full h-full py-4 px-6 outline-none bg-transparent focus:border-black border border-gray-white transition-colors placeholder:text-[#9f9f9f]', className)}
      {...props}
    />
  );
};
