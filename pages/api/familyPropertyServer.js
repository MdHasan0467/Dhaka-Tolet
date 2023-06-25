import dbConnect from "@/lib/db_config";

const familyPropertyServer = async (req, res) => {
    const client = await dbConnect();
    const db = client.db("Dhaka_Tolet");
  
    const familyPropertyCollection = db.collection("family_property");
   
        if (req.method === "GET") {
        const data = await familyPropertyCollection.find().toArray();
        res.send(data);
    } else if (req.method === "POST") {
        const post = req.body;
        const result = await familyPropertyCollection.insertOne(post);
        res.status(201).send(result);
    } 


};

export default familyPropertyServer;