import React, { forwardRef, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ className, ...props }, ref) => {
  return (
    <input
      className={twMerge('w-full h-full py-4 px-6 outline-none bg-transparent focus:border-black border border-gray-white transition-colors placeholder:text-[#9f9f9f]', className)}
      ref={ref}
      {...props}
    />
  );
};

const ForwardedInput = forwardRef(Input);

export default ForwardedInput;
