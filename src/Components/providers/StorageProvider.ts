import { getDownloadURL, ref, uploadBytes, StorageReference, UploadResult } from 'firebase/storage';
import { storage } from '../../config/firebase.config';

let isUploading: boolean;

/**
 * Saves a file.
 *
 * @param {File} file - The File blob to save.
 * @param {String} uid - The User UID.
 * @param {String} type - The type of the file. Example: 'pfp', 'roomsPhoto'.
 * @returns {Promise<string>} the URL of the uploaded file.
 * @example Example usage - saveToStorage(myFile, 'user123', 'profile')
 */
export const saveToStorage = (file: File, uid: string, type: string): Promise<string> => {
  if (isUploading || !uid || !file || !file.type.startsWith('image/')) {
    return Promise.reject('Invalid parameters for file upload');
  }
  isUploading = true;

  return new Promise((resolve, reject) => {
    const blob = new Blob([file], { type: file.type });
    const storageRef: StorageReference = ref(storage, `/${type}/` + uid);
    uploadBytes(storageRef, blob)
      .then((snapshot: UploadResult) => {
        getDownloadURL(snapshot.ref)
          .then((url: string) => {
            isUploading = false;
            resolve(url);
          })
          .catch(() => {
            isUploading = false;
            reject();
          });
      })
      .catch(() => {
        isUploading = false;
        reject();
      });
  });
};
