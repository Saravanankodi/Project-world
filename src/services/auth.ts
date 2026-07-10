import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "@/lib/firebase";
import { saveUserProfile } from "./user";


const googleProvider = new GoogleAuthProvider();

export async function register(
  name: string,
  email: string,
  password: string
) {
  const credential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await saveUserProfile(credential.user.uid, {
    uid: credential.user.uid,
    name,
    email,
    phone: 0,
    age: 0,
    userType: "student",
    portfolioLinks: [],
    experience: 0,
    location: "",
    gender: "none",
    intro: "",
    profileImg: "",
  });

  return credential.user;
}

export async function login(
  email: string,
  password: string
) {
  const credential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return credential.user;
}

export async function loginWithGoogle() {
  const result = await signInWithPopup(auth, googleProvider);

  const user = result.user;

  await saveUserProfile(user.uid, {
    uid: user.uid,
    name: user.displayName ?? "",
    email: user.email ?? "",
    phone: 0,
    age: 0,
    userType: "student",
    portfolioLinks: [],
    experience: 0,
    location: "",
    gender: "none",
    intro: "",
    profileImg: user.photoURL ?? "",
  });

  return user;
}

export async function logout() {
  await signOut(auth);
}

export async function resetPassword(
  email: string
) {
  await sendPasswordResetEmail(auth, email);
}