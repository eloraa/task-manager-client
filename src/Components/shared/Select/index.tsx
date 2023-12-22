import React, { forwardRef, ReactNode, SelectHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  children?: ReactNode;
}

const Select: React.ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = ({ className, children, ...props }, ref) => {
  return (
    <select
      className={twMerge('w-full h-full py-4 px-6 outline-none bg-transparent focus:border-black border border-gray-white transition-colors placeholder:text-[#9f9f9f]', className)}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  );
};

const ForwardedSelect = forwardRef(Select);

export default ForwardedSelect;
