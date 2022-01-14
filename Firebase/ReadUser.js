

import initFirebase from "./Init";
import { getFirestore , doc , getDoc} from "firebase/firestore";


const app = initFirebase();
const db = getFirestore(app);
const readFromFirestore = async (user) => {
    console.log("user",user);
    const docRef = doc(db,"users",user);
    const myDoc = await getDoc(docRef);
    if(myDoc.exists()){
        console.log(myDoc.data());
        return myDoc.data();
    }
    else{
        return {
            error : "Interview not found"
        }
    }
}

export default readFromFirestore;