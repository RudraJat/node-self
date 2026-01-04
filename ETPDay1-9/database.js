const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Rudra01:Rpsj123@nodeself.whijtvy.mongodb.net/collegeDB")
.then(()=>{
    console.log("Connected to mongodb successfully");
})
.catch((err)=>{
    console.log("Error connecting to mongodb: ", err);  
})

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
})

const Student = mongoose.model("Student", studentSchema);

const newStudent = new Student({
    name:"anisha",
    age: 20,
    course: "Btech"
});

// newStudent.save();

const user = Student.find({
    age:20
});
