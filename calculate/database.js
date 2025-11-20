const {MongoClient}=require("mongodb");

//Conection URL
const url =
    "mongodb+srv://Rudra01:Rpsj123@nodeself.whijtvy.mongodb.net/";

const client = new MongoClient(url);

//Database Name
const dbName = "nodeSelfDB";
 
async function main(){
    //Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("users");
    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());