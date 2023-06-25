import dbConnect from "@/lib/db_config";


const hostelPropertyServer = async (req, res) => {
    const client = await dbConnect();
    const db = client.db("Dhaka_Tolet");
  
    const hostelPropertyCollection = db.collection("hostel_property");
   
        if (req.method === "GET") {
        const data = await hostelPropertyCollection.find().toArray();
        res.send(data);
    } else if (req.method === "POST") {
        const post = req.body;
        const result = await hostelPropertyCollection.insertOne(post);
        res.status(201).send(result);
    } 


};

export default hostelPropertyServer;