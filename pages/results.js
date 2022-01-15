import { useContext } from 'react'
import Results from '../components/Results';
import Login from '../components/Login';
import AppContext from '../context/state'
export default function ResultFunction() {
    const value = useContext(AppContext);
    value.setPageState("results");
    const handleLogin = (user) => {
        if(user){
        value.setIsLoggedIn(true);
        value.setFormState(1);
        value.setUser(user);
        console.log(value.state.user)
        }
    }

    return (
        value.state.user ? <Results user={value.state.user}></Results> : <Login handleLogin={handleLogin}></Login>
    )
}
