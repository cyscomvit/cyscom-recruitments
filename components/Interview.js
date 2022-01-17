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
        if(!interview.interview){
            return "Error";
        }
        if(interview.interview.status == "not_assigned"){
<<<<<<< HEAD
            return `Your interview has not been scheduled yet. Hang tight!`;
        }
        return `Your interview is scheduled on ${interview.interview.date} at ${interview.interview.time }`;
=======
            return `Hello ${interview.personalData.name} Interview is not assigned yet`;
        }
        return `Hello ${interview.personalData.name} Your interview is scheduled at ${interview.interview.time } on ${interview.interview.date}`;
>>>>>>> 8a3c7ac3d3d9efad7365de7a3e445363f1ff5213
    }
    
    return (
        <div>
            
            {
                loading ? <Alert className={styles.alert} message="Loading..." type="info"></Alert> : interview.error ? <Alert className={styles.alert} message={interview.error} type="error"></Alert> : 
                <>
                <h1 className={styles.alert}>{formatData(interview)}</h1>
                <CandidateForm data={interview}></CandidateForm>
                </>
            }
        </div>
    )
}