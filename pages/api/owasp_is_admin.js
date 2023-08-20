
export default async function handler(req,res){
    if(req.method !== "POST"){
        res.status(400).send("Invalid request");
        return;
    }
    try{
        const admins = process.env.admins.split(",");
        
        res.status(200).send(admins.includes(req.body.email));
    }
    catch(e){
        res.status(500).send(e.message);
        return;
    }

}