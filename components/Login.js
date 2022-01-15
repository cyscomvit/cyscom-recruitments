
import signInWithGoogle from "../Firebase/Auth";
import { Button } from "antd";
import {Alert} from "antd";
import { useState , useEffect} from "react";
const Login = ({handleLogin}) => {

    const [error, setError] = useState(null);

    useEffect(() => {
        const getRedirectResult = async () => {
            try {
               const result = await auth.getRedirectResult();
               const user = result.user;
               console.log(user);
               return user;
            }
               catch (error) {
                  console.log(error);
               }
         }
            getRedirectResult();
        }, []);
        
    const handleGoogleSignIn = async () => {
        const user = await signInWithGoogle();
        if(user){
            if(user.email.includes("@vitstudent.ac.in")){
                handleLogin(user);
                setError(null);
            }
            else{
                setError("Please login with your VIT email id");
            }
        }
        else{
            setError("Login unsuccessful");
        }
    };
    return (
        <div>
            {error && <Alert type = "error" message = {error}></Alert>}
            <Button style={{margin: "1%"}} onClick={handleGoogleSignIn}>Sign in with Google</Button>
        </div>
    );
}
export default Login;