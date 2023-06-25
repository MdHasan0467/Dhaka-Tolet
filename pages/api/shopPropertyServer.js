import dbConnect from "@/lib/db_config";


const shopPropertyServer =  async (req, res) => {
    const client = await dbConnect();
    const db = client.db("Dhaka_Tolet");
  
    const shopPropertyCollection = db.collection("shop_property");
   
        if (req.method === "GET") {
        const data = await shopPropertyCollection.find().toArray();
        res.send(data);
    } else if (req.method === "POST") {
        const post = req.body;
        const result = await shopPropertyCollection.insertOne(post);
        res.status(201).send(result);
    } 

};

export default shopPropertyServer;