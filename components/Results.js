import { useEffect, useState } from 'react'
import readFromFirestore from '../Firebase/ReadUser'
import { Alert } from 'antd';
import CandidateForm from './CandidateForm';
import styles from "../styles/global/global.module.css";
export default function Results({ user }) {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dept, setDept] = useState(null);
    useEffect(() => {
        const getResult = async () => {
            const resultDoc = await readFromFirestore(user.email);
            setResult(resultDoc);
            setLoading(false);
            setDept(resultDoc.selectedDepartments);
        }
        getResult();
    }, []);

    const formatData = (resultDoc) => {

        if (resultDoc.result == "not_published") {
            return `Results have not been published yet`;
        }
        else if (resultDoc.result == "selected") {
            return `Congratulations ${result.personalData.name}! You have been selected for the interview round for ${result.selectedDepartments.join(' and ')} department(s)`;
        }
        else if (resultDoc.result == "rejected") {
            return `We regret to inform you that you have not been selected this time. But that doesn't mean you can't be selected next time. Please do apply the next time we recruit!`;
        }
    }

    return (
        <div>
            {
                loading ? <Alert className={styles.alert} message="Loading..." type="info"></Alert> : result.error ? <Alert className={styles.alert} message={result.error} type="error"></Alert> :
                    <>
                        {result.result == "not_published" && <h1 className={styles.alert}>Results for Round 2 have not been published yet</h1>}

                        {result.result == "selected" &&
                            <>
                                <h1 className={styles.selected}>Congratulations <span className={styles.span}>{result.personalData.name}! </span>
                                    You have been selected for the interview round for the <span className={styles.span}>{dept}</span> department!</h1>
                                <p className={styles.welcome}>Be sure to join the WhatsApp Group for people selected for Round 2<a href="https://chat.whatsapp.com/GxcZ9UMQpSZKHci9EVpMOg" target="_blank"  rel="noreferrer">here</a>, to know the details and timings for your offline interview round!</p>
                                <p className={styles.welcome}>You will not be considered for the next round if you do not join this group.</p>
                                <p className={styles.team}><i>- Team, CYSCOM</i></p>
                            </>
                        }

                        {result.result == "rejected" && <>
                        <h1 className={styles.rejectionHeader}>We regret to inform you that you have not been selected this time. But don't lose hope, keep learning and improving your skills!</h1>
                        <p className={styles.welcome}>We are thankful for the time you took to apply for CYSCOM and appear for the interview.</p>
                        <p className={styles.welcome}>This is just the beginning, and you can most certainly apply again next year!</p>
                        <p className={styles.welcome}>We wish you the best of luck in your future endeavors!</p>
                        <p className={styles.team}><i>- Team, CYSCOM</i></p>
                        </>}

                        {/* <h1 className={styles.alert}>{formatData(result)}</h1> */}
                        {/* <CandidateForm data={result}></CandidateForm> */}
                    </>
            }
        </div>
    )

}
