
import signInWithGoogle from "../Firebase/Auth";

const Login = () => {
    return (
        <div>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    );
}
export default Login;