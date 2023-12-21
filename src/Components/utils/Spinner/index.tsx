export const Spinner = () => {
  return (
    <div className="absolute inset-0 items-center justify-center flex">
      <div className="flex gap-1 [&>div]:w-2 [&>div]:h-2 [&>div]:bg-current [&>div]:rounded-full relative">
        <div className="animate-scale-in"></div>
        <div className="animate-translate-right absolute"></div>
        <div className="animate-translate-right"></div>
        <div className="animate-scale-out"></div>
      </div>
    </div>
  );
};
