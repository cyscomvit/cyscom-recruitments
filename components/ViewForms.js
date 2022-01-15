import { useState , useEffect } from "react"
import getAllDocs from "../Firebase/ReadAllUsers";
import readFromFirestore from "../Firebase/ReadUser";
import CandidateForm from "./CandidateForm";
import { Button , Alert} from "antd";
export default function ViewForms() {
    const [ids, setIds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentId, setCurrentId] = useState(null);
    const [currentForm, setCurrentForm] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getIds = async () => {
            const Myids = await getAllDocs();
            console.log(Myids);
            setIds(Myids);
            setCurrentId(0);
        }
        getIds();
    },[]);
    useEffect(() => {
        if(currentId == null){
            return;
        }
        console.log("currentId",currentId);
        const getData = async (id) => {
            setLoading(true);
            const resultDoc = await readFromFirestore(id);
            setCurrentForm(resultDoc);
            setLoading(false);
        }
        getData(ids[currentId]);
    }, [currentId]);

    const handleNext = () => {

        if(currentId == ids.length - 1){
            setError("No more forms to view");
            return;
        }
        setCurrentId(currentId + 1);
        setError(null);
    }
    const handleBack = () => {
        if(currentId == 0){
            setError("No more forms to view");
            return;
        }
        setCurrentId(currentId - 1);
        setError(null);
        
    }
    return (
        <div>
            {
                
                (loading ? <div>Loading...</div> : <div>
                    {error ? <Alert message={error} type="error"></Alert> : null}
                    <div>{currentForm.error ? currentForm.error : <CandidateForm data = {currentForm}></CandidateForm>}</div>
                    
                </div>)
                
            }
            <Button style={{margin:"10px"}} onClick = {handleBack}>Back</Button>
            <Button style={{margin:"10px"}} onClick = {handleNext}>Next</Button>
                    
        </div>
    )
}
