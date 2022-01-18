import initFirebase from "./Init";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

const app = initFirebase();
const db = getFirestore(app);

const assignFirestore = async (email , assigned) => {
  try {
    const docRef = doc(db, "users", email);
    await updateDoc(docRef, {
      interview: {
        status : "assigned",
        date: assigned.dateAssign,
        time: assigned.timeAssign,
      },
    });
  } catch (error) {
  }
};

export default assignFirestore;
