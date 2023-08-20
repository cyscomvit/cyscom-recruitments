
const { getAuth } = require('firebase-admin/auth');
const auth = getAuth();
import initFirebaseAdmin from "./InitAdmin";
initFirebaseAdmin();
const updateAdmin = async (email, claims) => {
  getAuth()
    .getUserByEmail(email)
    .then( (user) => {
      // Confirm user is verified.
      if (user.emailVerified) {
        // Add custom claims for additional privileges.
        // This will be picked up by the user on token refresh or next sign in on new device.
        // return await getAuth().setCustomUserClaims(user.uid, claims);
        getAuth()
          .setCustomUserClaims(user.uid, claims)
          .then(() => {
            // The new custom claims will propagate to the user's ID token the
            // next time a new one is issued.
          });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export default updateAdmin;