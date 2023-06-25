import dbConnect from "@/lib/db_config";


const bachelorPropertyServer = async (req, res) => {
    const client = await dbConnect();
    const db = client.db("Dhaka_Tolet");
  
    const bachelorPropertyCollection = db.collection("bachelor_property");
   
        if (req.method === "GET") {
        const data = await bachelorPropertyCollection.find().toArray();
        res.send(data);
    } else if (req.method === "POST") {
        const post = req.body;
        const result = await bachelorPropertyCollection.insertOne(post);
        res.status(201).send(result);
    } 


};

export default bachelorPropertyServer;