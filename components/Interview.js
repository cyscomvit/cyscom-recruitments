import { useEffect, useState } from 'react'
import { Alert } from 'antd';
import CandidateForm from './CandidateForm';
import styles from "../styles/global/global.module.css";
import readFromFirestore from '../Firebase/ReadUser'

export default function Interview({ user }) {
    const [interview, setInterview] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getInterview = async () => {
            const myinterview = await readFromFirestore(user.email);
            setInterview(myinterview);
            setLoading(false);
        }
        console.log(user);
        getInterview();
    },[]);
   
    const formatData = (interview) => {
        return `Hello ${interview.personalData.name} Your interview is scheduled at ${interview.personalData.timePreference } on ${interview.personalData.datePreference}`;
    }
    
    return (
        <div>
            
            {
                loading ? <Alert className={styles.alert} message="Loading..." type="info"></Alert> : interview.error ? <Alert className={styles.alert} message={interview.error} type="error"></Alert> : 
                <>
                <Alert className={styles.alert}  message={formatData(interview)} type="info"></Alert>
                <CandidateForm data={interview}></CandidateForm>
                </>
            }
        </div>
    )
}
