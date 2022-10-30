
const { getAuth } = require('firebase-admin/auth');
import initFirebaseAdmin from "./InitAdmin";
initFirebaseAdmin();
const updateAdmin = async (email , claims) => {
    getAuth()
    .getUserByEmail(email)
    .then((user) => {
      // Confirm user is verified.
      if (user.emailVerified) {
        // Add custom claims for additional privileges.
        // This will be picked up by the user on token refresh or next sign in on new device.
        return getAuth().setCustomUserClaims(user.uid, claims);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export default updateAdmin;