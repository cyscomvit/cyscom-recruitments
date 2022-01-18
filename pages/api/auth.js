

import makeAdmin from "../../Firebase/MakeAdmin";

export default async function handler (req,res){
    if(req.method!=="POST"){
        res.status(405).send("Method not allowed");
        return;
    }
    if(req.body.password!==process.env.ADMIN_PASSWORD){
        res.status(401).send("Unauthorized");
        return;
    }
    try{
        await makeAdmin(req.body.email);
        res.status(200).json({
            message: "Successfully made admin",
        });
    }
    catch(error){
        res.status(500).json({
            message: "Error",
        });
    }
}
