

import initFirebase from "./Init";
import { getFirestore  , getDocs, collection} from "firebase/firestore";


const app = initFirebase();
const db = getFirestore(app);

const getAllSelected = async () => {
    
   //loop through collection users
   const querySnapshot = await getDocs(collection(db,"users"));
   const allDocs = [];
    querySnapshot.forEach(doc => {
        if(doc.data().result == "selected"){
            allDocs.push(doc.data());
        }
    }
    );
    return allDocs;
}

export default getAllSelected;