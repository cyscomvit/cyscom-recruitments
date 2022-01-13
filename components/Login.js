
import signInWithGoogle from "../Firebase/Auth";
import { Button } from "antd";

const Login = ({handleLogin}) => {

    const handleGoogleSignIn = async () => {
        const user = await signInWithGoogle();
        console.log(user);
        handleLogin(user);
    };
    return (
        <div>
            <Button style={{margin: "1%"}} onClick={handleGoogleSignIn}>Sign in with Google</Button>
        </div>
    );
}
export default Login;