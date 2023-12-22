import { useState, ChangeEvent, RefObject } from 'react';
import { selectFile } from '../utils/utils';

interface UseUploadProps {
  isUpdating: boolean;
  formRef: RefObject<HTMLFormElement>;
}

export const useUpload = ({ isUpdating, formRef }: UseUploadProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = () => {
    if (isUpdating) return;
    formRef.current?.photo.click();
  };

  const handleFileSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    if (isUpdating) return;
    try {
      const file = await selectFile(e);
      if (file) {
        if (formRef.current?.photoURL) {
          formRef.current.photoURL.disabled = true;
          formRef.current.photoURL.placeholder = 'Will be selected from the file.';
          formRef.current.photoURL.value = '';
        }
        setSelectedImage(file);
      } else if (formRef.current?.photoURL) {
        formRef.current.photoURL.disabled = false;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeSelectedImage = (def?: string | null) => {
    if (isUpdating) return;
    if (selectedImage || def) {
      setSelectedImage(def || null);
      formRef.current && (formRef.current.photo.value = '');
      if (formRef.current?.photoURL) {
        formRef.current.photoURL.disabled = false;
        formRef.current.photoURL.placeholder = 'Photo URL';
        formRef.current.photoURL.value = '';
      }
    }
  };

  return { handleImageUpload, handleFileSelect, removeSelectedImage, setSelectedImage, selectedImage };
};
