import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initFirebase from "./Init";

const app = initFirebase();

const auth = getAuth();

const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
   try {
      const result = await signInWithPopup(auth , provider);
      const user = result.user;
      console.log(user);
      return user;
   }
    catch (error) {
      console.log(error);
    }  
}
export default signInWithGoogle;