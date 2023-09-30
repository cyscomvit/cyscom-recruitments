import { useEffect, useState } from 'react';
import { Alert } from 'antd';
import CandidateForm from './CandidateForm';
import styles from '../styles/global/global.module.css';
import readFromFirestore from '../Firebase/ReadUser';

export default function Interview({ user }) {
	const [interview, setInterview] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const getInterview = async () => {
			const myinterview = await readFromFirestore(user.email);
			setInterview(myinterview);
			setLoading(false);
		};
		getInterview();
	}, []);

	const formatData = (interview) => {
		if (!interview.interview) {
			return 'Error';
		}
		if (interview.interview.status == 'not_assigned') {
			return `Your interview details will be announced soon. Hang tight!`;
		}
		return `Your interview is scheduled on ${interview.interview.date} at ${interview.interview.time}`;
	};

	return (
		<div>
			{loading ? (
				<Alert
					className={styles.alert}
					message='Loading...'
					type='info'
				></Alert>
			) : interview.error ? (
				<Alert
					className={styles.alert}
					message={interview.error}
					type='error'
				></Alert>
			) : (
				<>
					<h1 className={styles.alert}>{formatData(interview)}</h1>
					{/* Uncomment this if you want to show the details table */}
					{/* <CandidateForm data={interview}></CandidateForm> */}
					<p
						style={{
							width: '85%',
							margin: '0 auto',
							marginTop: '20px',
							fontSize: '1.3rem',
							textAlign: 'center',
						}}
					>
						Thank you for registering. For any queries, join our{' '}
						<a href='https://chat.whatsapp.com/I6ihKqtsz7kFcDH8DcOBW3'>
							WhatsApp Help desk (Click here)
						</a>
						Stay tuned!
					</p>
				</>
			)}
		</div>
	);
}
