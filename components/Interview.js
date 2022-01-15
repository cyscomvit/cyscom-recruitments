import { useEffect, useState } from 'react'
import { Alert } from 'antd';
import readFromFirestore from '../Firebase/ReadUser'

export default function Interview({ user }) {
    const [interview, setInterview] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getInterview = async () => {
            const interview = await readFromFirestore(user.email);
            setInterview(interview);
            setLoading(false);
        }
        getInterview();
    });
   
    const formatData = (interview) => {
        return `Hello ${interview.personalData.name} Your interview is scheduled at ${interview.personalData.timePreference } on ${interview.personalData.datePreference}`;
    }
    
    return (
        <div>
            {
                loading ? <Alert message="Loading..." type="info"></Alert> : interview.error ? <Alert message={interview.error} type="error"></Alert> : <Alert message={formatData(interview)} type="success"></Alert>
            }
        </div>
    )
}
