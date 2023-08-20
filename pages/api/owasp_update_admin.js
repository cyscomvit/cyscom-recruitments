import updateAdmin from "../../Firebase/UpdateAdmin";
import getAdmins from "../../Firebase/GetAdmins";
export default async function handler (req,res){
    const { email , password } = req.body;
    if(!email || !password){
        res.status(400).send("Please enter email and password");
        return;
    }
    if(password != process.env.ADMIN_PASSWORD){
        res.status(401).send("Unauthorized");
        return;
    }
    try{
        
        switch(req.method){
            case "POST":
                await updateAdmin(email , {
                    admin : true
                });
                res.status(200).send("Admin added");
                break;
            case "DELETE":
                await updateAdmin(email , null);
                res.status(200).send("Admin removed");
                break;
            default:
                res.status(400).send("Invalid request");
                break;
            }
        }
    catch(e){
        res.status(500).send("Error updating admin");
    }
}
