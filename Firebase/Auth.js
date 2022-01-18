import { getAuth, GoogleAuthProvider, signInWithRedirect  , getRedirectResult} from "firebase/auth";

import initFirebase from "./Init";

const app = initFirebase();

const auth = getAuth();

const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
   try {
      signInWithRedirect(auth, provider);
   }
    catch (error) {
    }  
}

export  {
   signInWithGoogle,
   auth,
   getRedirectResult
};