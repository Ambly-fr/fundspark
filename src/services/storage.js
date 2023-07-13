import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


async function uploadFile(file) {
  const storage = getStorage();
  const storageRef = ref(storage, 'some-directory/' + file?.name);
  
  const uploadTask = uploadBytesResumable(storageRef, file);

  await new Promise((resolve, reject) => {
    uploadTask.on('state_changed',
      (error) => {
        reject(error);
      }, 
      () => {
        resolve(uploadTask.snapshot);
      }
    );
  });

  return uploadTask.snapshot;
}

async function uploadDefaultUserImage(){

    const response = await fetch('/userdefaultimage.jpg');

    const blob = await response.blob();

    blob.name = 'userdefaultimage.jpg';

    const snapshot = await uploadFile(blob);
    console.log(snapshot);

    return await getDownloadURL(snapshot.ref);
}





export { uploadFile, uploadDefaultUserImage };
