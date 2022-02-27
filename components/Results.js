import { useEffect, useState } from 'react'
import readFromFirestore from '../Firebase/ReadUser'
import { Alert } from 'antd';
import CandidateForm from './CandidateForm';
import styles from "../styles/global/global.module.css";
export default function Results({ user }) {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getResult = async () => {
            const resultDoc = await readFromFirestore(user.email);
            setResult(resultDoc);
            setLoading(false);
        }
        getResult();
    },[]);
   
    const formatData = (resultDoc) => {
        
        if(resultDoc.result == "not_published"){
            return `Results have not been published yet`;
        }
        else if(resultDoc.result == "selected"){
            return `Congratulations ${result.personalData.name}! You have been selected for the ${result.selectedDepartments.join(', ')} department(s)`;
        }
        else if(resultDoc.result == "rejected"){
            return `We regret to inform you that you have not been selected this time. But that doesn't mean you can't be selected next time. Keep trying!`;
        }
    }
    
    
        
         return (
            <div>
                {
                    loading ? <Alert className={styles.alert} message="Loading..." type="info"></Alert> : result.error ? <Alert className={styles.alert} message={result.error} type="error"></Alert> :
                    <> 
                    <h1 className={styles.alert}>{formatData(result)}</h1>
                    <CandidateForm data={result}></CandidateForm>
                    </>
                }
            </div>
        )
   
}
