import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "@/lib/firebase";
import { getAuth } from "firebase/auth";

const auth = getAuth();

const storage = getStorage(app);

export async function uploadFile(
    file: File | null,
    folder: string
): Promise<string | null> {

    if (!file) return null;

    const fileName = `${Date.now()}-${file.name}`;

    const storageRef = ref(
        storage,
        `projects/${auth.currentUser?.uid}/${folder}/${fileName}`
    );

   

    await uploadBytes(storageRef, file);

   

    const url = await getDownloadURL(storageRef);

   

    return url;
}


// User Profile Image Upload

export async function uploadProfilePhoto(
  file: File | null
): Promise<string | null> {
  if (!file) return null;

  const fileName = `${Date.now()}-${file.name}`;

  const storageRef = ref(
    storage,
    `user_profile_photo/${auth.currentUser?.uid}/photo/${fileName}`
  );

  await uploadBytes(storageRef, file);

  return await getDownloadURL(storageRef);
}