

import initFirebase from "./Init";
import { getFirestore , doc , getDoc} from "firebase/firestore";


const app = initFirebase();
const db = getFirestore(app);
const readFromFirestore = async (user) => {
    console.log("user",user);
    try{
        const docRef = doc(db,"users",user);
        const myDoc = await getDoc(docRef);
        if(myDoc.exists()){
            console.log(myDoc.data());
            return myDoc.data();
        }
        else{
            return {
                error : "Not Found"
            }
        }
    }
    catch(error){
        return {
            error : "Not Found"
        }
    }
}

export default readFromFirestore;