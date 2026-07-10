import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { UserProfile } from "@/types/types";


export async function saveUserProfile(
  uid: string,
  profile: Omit<UserProfile, "createdAt" | "updatedAt">
) {
  const ref = doc(db, "users", uid);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    await setDoc(ref, {
      ...profile,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return;
  }

  await updateDoc(ref, {
    ...profile,
    updatedAt: serverTimestamp(),
  });
}

export async function getUserProfile(uid: string) {
  const ref = doc(db, "users", uid);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data() as UserProfile;
}

export async function updateUserProfile(
  uid: string,
  data: Partial<UserProfile>
) {
  const ref = doc(db, "users", uid);

  await updateDoc(ref, {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteUserProfile(uid: string) {
  const ref = doc(db, "users", uid);

  await deleteDoc(ref);
}