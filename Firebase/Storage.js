import initFirebase from "./Init";
import { getFirestore , collection ,addDoc} from "firebase/firestore";


const app = initFirebase();
const db = getFirestore();

const addToFirestore = async (data) => {
    const collectionRef = collection(db, "users");
    await addDoc(collectionRef, data);
}

export default addToFirestore;