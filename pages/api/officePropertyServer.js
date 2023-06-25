import dbConnect from "@/lib/db_config";


const officePropertyServer = async (req, res) => {
    const client = await dbConnect();
    const db = client.db("Dhaka_Tolet");
  
    const officePropertyCollection = db.collection("office_property");
   
        if (req.method === "GET") {
        const data = await officePropertyCollection.find().toArray();
        res.send(data);
    } else if (req.method === "POST") {
        const post = req.body;
        const result = await officePropertyCollection.insertOne(post);
        res.status(201).send(result);
    } 

};

export default officePropertyServer;