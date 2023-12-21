export const TogglePassword = ({ setViewPass, viewPass }: { setViewPass: React.Dispatch<React.SetStateAction<boolean>>; viewPass: boolean }) => {
  return (
    <span className="absolute right-4 p-1 transition-colors hover:bg-coconut-faded cursor-pointer" onClick={() => setViewPass(!viewPass)}>
      {viewPass ? (
        <svg viewBox="0 0 24 24" fill="none" width="24" height="24" role="presentation" focusable="false">
          <path
            d="M20.177 11.678a12.025 12.025 0 0 0-1.988-2.806l-1.073 1.072A11.293 11.293 0 0 1 18.65 12c-.62 1.082-2.879 4.5-6.65 4.5a5.95 5.95 0 0 1-1.291-.15l-1.227 1.227A7.68 7.68 0 0 0 12 18c5.412 0 8.067-5.446 8.177-5.678l.154-.322-.154-.322ZM16.97 5.97l-1.074 1.073A7.782 7.782 0 0 0 12 6c-5.411 0-8.066 5.446-8.177 5.678L3.669 12l.154.322a12.032 12.032 0 0 0 3.024 3.77l-.877.878 1 1 11-11-1-1Zm-3.78 3.78A2.845 2.845 0 0 0 12 9.5 2.321 2.321 0 0 0 9.5 12c-.005.41.08.817.248 1.192l-1.823 1.822A10.744 10.744 0 0 1 5.35 12c.62-1.081 2.879-4.5 6.65-4.5a6.176 6.176 0 0 1 2.773.667L13.19 9.75Z"
            fill="currentColor"
            vectorEffect="non-scaling-stroke"
          ></path>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" width="24" height="24" role="presentation" focusable="false">
          <path d="M12 9.5A2.321 2.321 0 0 0 9.5 12a2.321 2.321 0 0 0 2.5 2.5 2.321 2.321 0 0 0 2.5-2.5A2.32 2.32 0 0 0 12 9.5Z" fill="currentColor" vectorEffect="non-scaling-stroke"></path>
          <path
            d="M20.177 11.678C20.067 11.446 17.412 6 12 6c-5.411 0-8.066 5.446-8.177 5.678L3.669 12l.154.322C3.933 12.554 6.589 18 12 18c5.412 0 8.067-5.446 8.177-5.678l.154-.322-.154-.322ZM12 16.5c-3.77 0-6.03-3.42-6.65-4.5.62-1.081 2.879-4.5 6.65-4.5 3.771 0 6.029 3.418 6.65 4.5-.621 1.082-2.88 4.5-6.65 4.5Z"
            fill="currentColor"
            vectorEffect="non-scaling-stroke"
          ></path>
        </svg>
      )}
    </span>
  );
};
