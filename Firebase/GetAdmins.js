import { getAuth } from "firebase-admin/auth";
import initFirebaseAdmin from "./InitAdmin";
initFirebaseAdmin();

const getAdmins = async () => {
    const auth = getAuth();
    const users = await auth.listUsers();
    const admins = users.users.filter((user) => {
        try{
            return user.customClaims.admin;
        }
        catch(e){
            return false;
        }
    });
    return admins.map((admin) => {
        return admin.email;
    });
}


export default getAdmins;

