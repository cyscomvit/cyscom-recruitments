import initFirebase from "./Init";
import { getFirestore  , collection , doc, updateDoc , getDocs} from "firebase/firestore";


const app = initFirebase();
const db = getFirestore(app);

const finalPublish = async () => {
    try{
        const querySnapshot = await getDocs(collection(db,"users"));
         querySnapshot.forEach(doc => {
             if(doc.data().result == "not_published"){
                 updateDoc(doc.ref,{
                     result : "rejected",
                     });
             }
         }
         );
         return allDocs;
       }
        catch(error){
            return {
                error : "Not Found"
            }
        }
}
export default finalPublish;