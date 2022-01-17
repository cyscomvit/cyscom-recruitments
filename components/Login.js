
import { signInWithGoogle , auth , getRedirectResult} from "../Firebase/Auth";
import { Button } from "antd";
import {Alert} from "antd";
import { useState , useEffect , useContext} from "react";
import AppContext from "../context/state";
const Login = () => {

    const [error, setError] = useState("Fetching User");
    const value = useContext(AppContext);
    const isAdmin = (user) => {
        try{
            return JSON.parse(user.reloadUserInfo.customAttributes).admin;
        }
        catch(e){
            return false;
        }
    }
    const handleLogin = (user) => {
        if(user){
        value.setIsLoggedIn(true);
        value.setFormState(1);
        value.setUser(user);
        console.log(value.state.user)
        }
    }
    useEffect(() => {
        const catchLogin = async () => {
            try {
               const result = await getRedirectResult(auth);
               const user = result.user;
               if(user){
                   console.log(user)
                   if(value.state.user){
                       return;
                   }
                   if(isAdmin(user)){
                          value.setIsAdmin(true);
                     }
                   if(user.email.includes("@vitstudent.ac.in")){
                     handleLogin(user);
                     setError(null);
                   }
                     else{
                            setError("Please login with your VIT email");
                        }
                }
            
            } catch (error) {
                setError("Please login with your VIT email");
            }
         }
            catchLogin();
        }, []);
 
    return (
        <div >
            {error && <Alert type = "info" message = {error}></Alert>}
            {error!="Fetching User" && <Button style={{margin: "10px auto", display: 'block'}} onClick={signInWithGoogle}>Sign in with Google</Button>}
        </div>
    );
}
export default Login;