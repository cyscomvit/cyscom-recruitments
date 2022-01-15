

import initFirebase from "./Init";
import { getFirestore  , doc , updateDoc } from "firebase/firestore";


const app = initFirebase();
const db = getFirestore(app);

const unselectFirestore = async (email) => {
    
    

        const docRef = doc(db,"users",email);
        
        
            await updateDoc(docRef,{
                result : "rejected",
                selectedDepartments : []
            });
        }


export default unselectFirestore;