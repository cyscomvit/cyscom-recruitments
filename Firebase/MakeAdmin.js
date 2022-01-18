import * as admin from "firebase-admin";
const { getAuth } = require('firebase-admin/auth');

if(!admin.apps.length){
    admin.initializeApp({
        credential:admin.credential.cert(
            {
                projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                clientEmail:process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
                privateKey:process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n'),
            }
        ),
    });
}


const makeAdmin = async (email) => {
    getAuth()
    .getUserByEmail(email)
    .then((user) => {
        console.log(user);
      // Confirm user is verified.
      if (user.emailVerified) {
        // Add custom claims for additional privileges.
        // This will be picked up by the user on token refresh or next sign in on new device.
        return getAuth().setCustomUserClaims(user.uid, {
          admin: true,
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}


export default makeAdmin;
