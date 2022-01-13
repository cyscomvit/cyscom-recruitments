import initFirebase from "./Init";
import { getFirestore , doc , setDoc } from "firebase/firestore";


const app = initFirebase();
const db = getFirestore(app);

const addToFirestore = async (data) => {
    console.log(db);
    console.log(data);
    await setDoc(doc(db,"users",data.uid),data);
}

export default addToFirestore;