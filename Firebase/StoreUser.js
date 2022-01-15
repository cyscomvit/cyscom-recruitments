import initFirebase from "./Init";
import { getFirestore , doc , setDoc } from "firebase/firestore";


const app = initFirebase();
const db = getFirestore(app);

const addToFirestore = async (data) => {
    console.log(db);
    console.log(data);
    const docRef = doc(db,"users",data.uid);
    console.log("docref",docRef);
    await setDoc(docRef,data);
}

export default addToFirestore;