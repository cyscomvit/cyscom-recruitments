import { useContext, useEffect  } from 'react'
import Interview from '../components/Interview'
import Login from '../components/Login';
import AppContext from '../context/state'

export default function InterviewFunction() {
    const value = useContext(AppContext);
    useEffect(() => {
        value.setPageState('interview');
    }, [])
   

    return (
        value.state.user ? <>
        <Interview user={value.state.user}></Interview>
        </> : <Login></Login>
    )
}
