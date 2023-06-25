import dbConnect from "@/lib/db_config";


const subletPropertyServer =async (req, res) => {
    const client = await dbConnect();
    const db = client.db("Dhaka_Tolet");
  
    const subletPropertyCollection = db.collection("sublet_property");
   
        if (req.method === "GET") {
        const data = await subletPropertyCollection.find().toArray();
        res.send(data);
    } else if (req.method === "POST") {
        const post = req.body;
        const result = await subletPropertyCollection.insertOne(post);
        res.status(201).send(result);
    } 

};

export default subletPropertyServer;