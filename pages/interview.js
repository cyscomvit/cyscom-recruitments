import { useContext , useState , useEffect } from 'react'
import Interview from '../components/Interview'
import Login from '../components/Login';
import AppContext from '../context/state'
import readFromFirestore from '../Firebase/ReadUser';
import CandidateForm from '../components/CandidateForm';
export default function InterviewFunction() {
    const value = useContext(AppContext);
    value.setPageState("interview");
    const [data, setData] = useState(null);
    useEffect(() => {
        const getData = async () => {
            if(value.state.user === null){
                return;
            }
            const mydata = await readFromFirestore(value.state.user.email);
            setData(mydata);
        }
        getData();
    }, [value.state.user])

    return (
        value.state.user ? <>
        <Interview user={value.state.user}></Interview>
        {data ? <CandidateForm data = {data}></CandidateForm> : <div>Loading...</div>}
        </> : <Login></Login>
    )
}
