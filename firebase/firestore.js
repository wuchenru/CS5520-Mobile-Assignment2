import { collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";

import { firestore } from "./firebase-setup";

export async function writeToDB({ amount, description, important }) {
  try {
    const docRef = await addDoc(collection(firestore, "Expenses"), {
      amount,
      description,
      important,
    });
  } catch (err) {
    console.log(err);
  }
}

export async function deleteFromDB(key) {
  try {
    await deleteDoc(doc(firestore, "Expenses", key));
  } catch (err) {
    console.log(err);
  }
}

export async function updateImportanceToDB(key) {
  try {
    const updateRef = doc(firestore, "Expenses", key);
    await updateDoc(updateRef, {
      important: true,
    });
  } catch (err) {
    console.log(err);
  }
}
