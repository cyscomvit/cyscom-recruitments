

import initFirebase from "./Init";
import { getFirestore  , getDocs, collection , doc , updateDoc} from "firebase/firestore";


const app = initFirebase();
const db = getFirestore(app);

const unPublish = async () => {
    console.log("unpublishing");
    try{
            
    const querySnapshot = await getDocs(collection(db,"users"));

    for(let docIter of querySnapshot.docs){

        const docRef = doc(db,"users",docIter.id);
   
            await updateDoc(docRef,{
                result : "not_published",
            });
        
        }
    }
    catch(error){
        console.log(error);
    }
}


export default unPublish;