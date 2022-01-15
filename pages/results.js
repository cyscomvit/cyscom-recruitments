import { useContext , useState , useEffect } from 'react'
import Results from '../components/Results';
import Login from '../components/Login';
import AppContext from '../context/state'
import CandidateForm from '../components/CandidateForm';
import readFromFirestore from '../Firebase/ReadUser';
export default function ResultFunction() {
    const value = useContext(AppContext);
    value.setPageState("results");
    const [data, setData] = useState(null);
    useEffect(() => {
        if(value.state.user === null){
            return;
        }
        const getData = async () => {
            const mydata = await readFromFirestore(value.state.user.email);
            setData(mydata);
        }
        getData();
    }, [value.state.user.email])

    return (
        value.state.user ? <>
        <Results user={value.state.user}></Results>
        {data ? <CandidateForm data = {data}></CandidateForm> : <div>Loading...</div>}
        </> : <Login></Login>
    )
}
