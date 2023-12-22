export const selectFile: React.ChangeEventHandler<HTMLInputElement> = e => {
  return new Promise<string>((resolve, reject) => {
    const fileInput = e.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
      if (!file.type.startsWith('image/')) {
        reject('Upload a valid image.');
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = event => {
          resolve(event.target?.result as string);
        };
      }
    } else {
      reject('Not a valid operation');
    }
  });
};
