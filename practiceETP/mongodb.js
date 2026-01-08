const {MongoClient} = require("mongodb");
const client= new MongoClient("mongodb://localhost:27017");

async function run(){

    try{
        await client.connect();
        const db = client.db("vehicleDB");
        const car = db.collection("car");

        // Insert multiple documents
        await car.insertMany([
            {model: "A", company: "Toyota", price: 30000},
            {model: "B", company: "Honda", price: 25000}
        ]);

        console.log("Documents inserted successfully.");
        const res = await car.find({price:{$gt:26000}}).toArray();
        console.log("Cars with price greater than 26000:", res);
    }catch(err){
        console.error("An error occurred: ", err);
    }finally{
        await client.close();
    }
}

run();