export const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-coconut-faded">
      <div className="w-24 h-24 [&_*]:w-24 [&_*]:h-24 [&_*]:absolute relative">
        <div className="inset-0 bg-red-700 blur-3xl"></div>
        <div className="[&_*]:bg-red-700/20 [&_*]:rounded-3xl [&_*]:border-2 [&_*]:border-red-700/90 animate-rotate [animation-fill-mode:forwards] [&_*]:[animation-fill-mode:forwards] [animation-delay:0.8s] [transform-style:preserve-3d] [transform:rotateX(-37.5deg)_rotateY(45deg)] [&_*]:origin-[50%_50%]">
          <div className="top animate-top-animation [transform:rotateX(90deg)_translateZ(96px)]"></div>
          <div className="right animate-right-animation [transform:rotateY(90deg)_translateZ(96px)] [animation-delay:100ms]"></div>
          <div className="bottom animate-bottom-animation [transform:rotateX(-90deg)_translateZ(96px)]"></div>
          <div className="left animate-left-animation [transform:rotateY(-90deg)_translateZ(96px)] [animation-delay:100ms]"></div>
          <div className="front animate-front-animation [transform:rotateY(0deg)_translateZ(96px)] [animation-delay:100ms]"></div>
          <div className="back animate-back-animation [transform:rotateY(-180deg)_translateZ(96px)] [animation-delay:100ms]"></div>
        </div>
      </div>
    </div>
  );
};
