import { useEffect, useState } from 'react'
import readFromFirestore from '../Firebase/Read'

export default function Interview({ user }) {
    const [interview, setInterview] = useState(null);
    
    useEffect(() => {
        const getInterview = async () => {
            const interview = await readFromFirestore(user.email);
            setInterview(interview);
        }
        getInterview();
    }, []);

    return (
        <div>
            {interview ? <div>Hello {interview.personalData.name} Your interview is scheduled at {interview.personalData.timePreference } on {interview.personalData.datePreference}</div> : <div>Loading...</div>}
        </div>
    )
}
