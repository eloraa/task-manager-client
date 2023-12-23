import { ChangeEvent } from 'react';
import client from 'axios';

export const selectFile = (e: ChangeEvent<HTMLInputElement>): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const fileInput = e.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
      if (!file.type.startsWith('image/')) {
        reject(new Error('Upload a valid image.'));
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = event => {
          resolve(event.target?.result as string);
        };
      }
    } else {
      reject(new Error('Not a valid operation'));
    }
  });
};

export const axios = client.create({ baseURL: import.meta.env.VITE_BACKENDSERVER });

