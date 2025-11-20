
require("dotenv").config();
const { MongoClient } = require("mongodb");

console.log("MONGODB_URI =", process.env.MONGODB_URI); 

const client = new MongoClient(process.env.MONGODB_URI);


//Database Name
const dbName = "FirstDataBase";
 
async function main(){
    //Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("User");

    //Insert
    const data ={
        _id:"01",
        firstname: "Kanak",
        lastname: "Sharma",
        city: "Haridwar"
    }

    // const insertResult = await collection.insertOne(data);
    // console.log("Inserted doc =>", insertResult);
    
    // //COUNT 
    // const count = await collection.countDocuments({});
    
    
    // //Read
    // //Finding All Documents
    const findResult = await collection.find({}).toArray();
    console.log("Found documents =>", findResult);
    // console.log("Total number of documents:", count);

    // Find all the documents with city Haridwar
    // const hardidwarUsers = await collection.find({city: "Haridwar"}).toArray();
    // console.log("Users from Haridwar =>", hardidwarUsers);
    
    //Update Documents
    // const updateResult = await collection.updateMany(
    //     {city: "Haridwar"},
    //     {$set: {city: "Gwalior"}}
    // );
    // console.log("Updated documents =>", updateResult);

    //DELETE Documents
    // const deleteResult = await collection.deleteOne({_id: "01"});
    // console.log("Deleted document =>", deleteResult);
    
    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());