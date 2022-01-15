

import initFirebase from "./Init";
import { getFirestore  , collection , doc, updateDoc , getDocs} from "firebase/firestore";


const app = initFirebase();
const db = getFirestore(app);

const updateFirestore = async (selectedPeople) => {
    
    const querySnapshot = await getDocs(collection(db,"users"));

    for(let docIter of querySnapshot.docs){

        const docRef = doc(db,"users",docIter.id);
        
        const found = selectedPeople.find(person => person.email.includes(docIter.id));
        if(found){
            await updateDoc(docRef,{
                result : "selected",
                selectedDepartments : found.departmentsSelected
            });
        }
        else{
            await updateDoc(docRef,{
                result : "rejected"
            });
        }

    }
}


export default updateFirestore;