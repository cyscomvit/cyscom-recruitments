import { useEffect, useState } from 'react'
import { Alert } from 'antd';
import CandidateForm from './CandidateForm';
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
                loading ? <Alert message="Loading..." type="info"></Alert> : interview.error ? <Alert message={interview.error} type="error"></Alert> : 
                <>
                <Alert message={formatData(interview)} type="success"></Alert>
                <CandidateForm data={interview}></CandidateForm>
                </>
            }
        </div>
    )
}
