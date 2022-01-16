import { useContext , useState , useEffect } from 'react'
import Results from '../components/Results';
import Login from '../components/Login';
import AppContext from '../context/state'

export default function ResultFunction() {
    
    const value = useContext(AppContext);
    useEffect(() => {
        value.setPageState('results');
    }, [])
   

    return (
        value.state.user ? <>
        <Results user={value.state.user}></Results>
        </> : <Login></Login>
    )
}
