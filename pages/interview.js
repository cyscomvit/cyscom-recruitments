import { useContext, useEffect } from 'react'
import Interview from '../components/Interview'
import Login from '../components/Login';
import AppContext from '../context/state'

export default function InterviewFunction() {
    const value = useContext(AppContext);
    useEffect(() => {
        value.setPageState('interview');
    }, [])


    return (
        <div style={{ 
            background: "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(/static/bg.jpg)", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            minHeight: '92.5vh',
            paddingTop: '70px' }} >
            <h1 style={{textAlign: 'center', marginTop: '30px', fontSize: '3rem', marginBottom: '0em'}}>Interview Details</h1>

            {value.state.user ? <>

                <Interview user={value.state.user}></Interview>
            </> : <Login></Login>}
        </div>
    )
}
