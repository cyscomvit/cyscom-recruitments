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
        <div style={{backgroundImage: "url(/_next/static/media/bg.75d2108d.jpg)"}}>
        <h1 style={{paddingTop:"5rem" , fontSize:"clamp(2.3rem,5vw,5rem)",fontFamily:"Oswald",fontWeight:"900"}}>Interview Details</h1>

        {value.state.user ? <>
        
        <Interview user={value.state.user}></Interview>
        </> : <Login></Login>}
        </div>
    )
}
