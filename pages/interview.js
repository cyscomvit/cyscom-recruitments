import { useContext } from 'react'
import Interview from '../components/Interview'
import Login from '../components/Login';
import AppContext from '../context/state'
export default function InterviewFunction() {
    const value = useContext(AppContext);
    
    const handleLogin = (user) => {
        if(user){
        value.setIsLoggedIn(true);
        value.setFormState(1);
        value.setUser(user);
        console.log(value.state.user)
        }
    }

    return (
        value.state.user ? <Interview user={value.state.user}></Interview> : <Login handleLogin={handleLogin}></Login>
    )
}
