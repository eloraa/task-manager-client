import React, { forwardRef, TextareaHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea: React.ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps> = ({ className, ...props }, ref) => {
  return (
    <textarea
      className={twMerge('w-full h-full py-4 px-6 outline-none bg-transparent focus:border-black border border-gray-white transition-colors placeholder:text-[#9f9f9f]', className)}
      ref={ref}
      {...props}
    />
  );
};

const ForwardedTextarea = forwardRef(Textarea);

export default ForwardedTextarea;
