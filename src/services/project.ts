// lib/project.ts

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import {
    ProjectInformation,
    TechnicalDetails,
    PriceDetails,
} from "@/types/project";

export type ProjectStatus =
  | "draft"
  | "pending"
  | "approved"
  | "rejected"
  | "published"
  | "archived"
;
export interface Project {
  id?: string;

  ownerId: string;

  projectInformation: ProjectInformation;
  technicalDetails: TechnicalDetails;
  priceDetails: PriceDetails;

  status: ProjectStatus;

  rejectionReason?: string;

  createdAt?: unknown;
  updatedAt?: unknown;
  publishedAt?: unknown;
}

// Create Project

export async function createProject(project: Omit<Project, "id" | "createdAt" | "updatedAt">) {
  const docRef = await addDoc(collection(db, "projects"), {
    ...project,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return docRef.id;
}

// Save Draft

export async function saveDraft(
  project: Omit<Project, "id" | "createdAt" | "updatedAt">
) {
  return createProject({
    ...project,
    status: "draft",
  });
}

// Submit Project

export async function submitProject(
  id: string,
  data: Partial<Project>
) {
  await updateDoc(doc(db, "projects", id), {
    ...data,
    status: "pending",
    updatedAt: serverTimestamp(),
  });
}

// Approve Project

export async function approveProject(id: string) {
  await updateDoc(doc(db, "projects", id), {
    status: "approved",
    updatedAt: serverTimestamp(),
  });
}

// Publish Project

export async function publishProject(id: string) {
  await updateDoc(doc(db, "projects", id), {
    status: "published",
    publishedAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

// Reject Project

export async function rejectProject(
  id: string,
  reason: string
) {
  await updateDoc(doc(db, "projects", id), {
    status: "rejected",
    rejectionReason: reason,
    updatedAt: serverTimestamp(),
  });
}

// Archive Project

export async function archiveProject(id: string) {
  await updateDoc(doc(db, "projects", id), {
    status: "archived",
    updatedAt: serverTimestamp(),
  });
}

// Get All Projects

export async function getProjects(): Promise<Project[]> {
  const snapshot = await getDocs(collection(db, "projects"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Project, "id">),
  }));
}

// Get Project by id
export async function getProjectById(
  id: string
): Promise<Project | null> {
  const projectRef = doc(db, "projects", id);

  const snapshot = await getDoc(projectRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<Project, "id">),
  };
}

// Get Projects by Status

export async function getProjectsByStatus(
  status: ProjectStatus
): Promise<Project[]> {
  const q = query(
    collection(db, "projects"),
    where("status", "==", status)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Project, "id">),
  }));
}

// Get User Projects

export async function getUserProjects(
    uid: string
): Promise<Project[]> {
    const q = query(
        collection(db, "projects"),
        where("ownerId", "==", uid)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Project, "id">),
    }));
}

// Delete Project

export async function deleteProject(id: string) {
  await deleteDoc(doc(db, "projects", id));
}

// Update Project

export async function updateProject(
  id: string,
  data: Partial<Omit<Project, "id" | "createdAt">>
) {
  await updateDoc(doc(db, "projects", id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}