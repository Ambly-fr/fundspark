import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


async function uploadFile(file) {
  const storage = getStorage();
  console.log(file.name);
  console.log(storage);
  const storageRef = ref(storage, 'some-directory/' + file?.name);
  
  // Début du téléchargement
  const uploadTask = uploadBytesResumable(storageRef, file);

  // Attendre que le téléchargement soit terminé
  await new Promise((resolve, reject) => {
    uploadTask.on('state_changed',
      (snapshot) => {
        // Progrès du téléchargement
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      }, 
      (error) => {
        // Erreur pendant le téléchargement
        reject(error);
      }, 
      () => {
        // Téléchargement terminé avec succès
        resolve(uploadTask.snapshot);
      }
    );
  });

  // Retourner le snapshot
  return uploadTask.snapshot;
}

async function uploadDefaultUserImage(){

    // get the default image
    const response = await fetch('/userdefaultimage.jpg');

    // convert it to a blob
    const blob = await response.blob();

    // add a name to the blob
    blob.name = 'userdefaultimage.jpg';

    console.log(blob);

    // upload the blob
    const snapshot = await uploadFile(blob);
    console.log(snapshot);

    // return the download URL
    return await getDownloadURL(snapshot.ref);
}





export { uploadFile, uploadDefaultUserImage };
