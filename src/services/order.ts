import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export type OrderStatus =
  | "pending"
  | "paid"
  | "failed"
  | "cancelled";

export interface Order {
  id?: string;

  projectId: string;
  sellerId: string;
  buyerId: string;

  amount: number;

  status: OrderStatus;

  createdAt?: unknown;
}

export async function createOrder(
  order: Omit<Order, "id" | "createdAt">
) {
  const orderRef = await addDoc(collection(db, "orders"), {
    ...order,
    createdAt: serverTimestamp(),
  });

  return orderRef.id;
}

export async function getBuyerOrders(
  buyerId: string
): Promise<Order[]> {
  const q = query(
    collection(db, "orders"),
    where("buyerId", "==", buyerId),
    where("status", "==", "paid")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Order, "id">),
  }));
}