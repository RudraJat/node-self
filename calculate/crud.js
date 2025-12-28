const {mongoClient, ObjectId} = require('mongodb');
const uri = "mongodb://localhost:27017"; // Replace with your MongoDB connection string
const client = new mongoClient(uri);

const db_name = 'studentDB';

async function run(){
    try{
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db(db_name);

        const students = db.collection('students');

        const insertResult = await students.insertOne({
            name: "Rudrapratap Singh Jat",
            age: 20,
            major: "Computer Science"
        });
        console.log("Insert Result:", insertResult.insertedId);

        const data = await students.find({}).toArray();
        console.log("Students Data:", data);

        const updateResult = await students.ObjectId.updateOne(
            { _id: ObjectId(insertResult.insertedId) },
            { $set: { age: 21 } }
        );
        console.log("Update Result:", updateResult.modifiedCount);

        const deleteResult = await students.deleteOne(
            { _id: ObjectId(insertResult.insertedId) }
        );
        console.log("Delete Result:", deleteResult.deletedCount);
    } catch (err) {
        await closeClient();
        console.error("An error occurred:", err);
        

    }
}