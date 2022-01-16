import initFirebase from "./Init";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

const app = initFirebase();
const db = getFirestore(app);

const unselectFirestore = async (email) => {
  try {
    const docRef = doc(db, "users", email);
    await updateDoc(docRef, {
      result: "rejected",
      selectedDepartments: [],
    });
  } catch (error) {
    console.log(error);
  }
};

export default unselectFirestore;
