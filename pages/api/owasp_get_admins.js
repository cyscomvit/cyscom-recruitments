import getAdmins from "../../Firebase/GetAdmins";
export default async function handler(req,res){
    if(req.method !== "GET"){
        res.status(400).send("Invalid request");
        return;
    }
    if(req.body.password !== process.env.ADMIN_PASSWORD){
        res.status(401).send("Unathorized");
        return;
    }
    const admins = await getAdmins();
    res.status(200).send(admins);
}