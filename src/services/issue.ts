import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export type IssueStatus =
  | "new"
  | "in_progress"
  | "resolved"
  | "closed";

export type IssuePriority =
  | "low"
  | "medium"
  | "high";

export type IssueCategory =
  | "payment"
  | "project"
  | "download"
  | "technical"
  | "account"
  | "other";

export interface Issue {
  id?: string;

  userId: string;

  orderId: string;
  projectId: string;
  sellerId: string;

  projectName: string;

  category: IssueCategory;
  subject: string;
  description: string;

  priority: IssuePriority;
  status: IssueStatus;

  attachments?: string[];

  createdAt?: unknown;
  updatedAt?: unknown;
  resolvedAt?: unknown;
}


// ===============================
// CREATE ISSUE
// ===============================

export async function createIssue(
  issue: Omit<Issue, "id" | "createdAt" | "updatedAt">
) {
  const issueRef = await addDoc(collection(db, "issues"), {
    ...issue,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return issueRef.id;
}


// ===============================
// GET ISSUE BY ID
// ===============================

export async function getIssueById(
  id: string
): Promise<Issue | null> {
  const issueRef = doc(db, "issues", id);

  const snapshot = await getDoc(issueRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<Issue, "id">),
  };
}


// ===============================
// GET USER ISSUES
// ===============================

export async function getUserIssues(
  userId: string
): Promise<Issue[]> {
  const q = query(
    collection(db, "issues"),
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Issue, "id">),
  }));
}


// ===============================
// UPDATE ISSUE STATUS
// ===============================

export async function updateIssueStatus(
  id: string,
  status: IssueStatus
) {
  await updateDoc(doc(db, "issues", id), {
    status,
    updatedAt: serverTimestamp(),

    ...(status === "resolved"
      ? {
          resolvedAt: serverTimestamp(),
        }
      : {}),
  });
}