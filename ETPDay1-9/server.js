const mongoose = require("mongoose");
const express = require("express");
const Student = require("./model/Student");
const Teacher = require("./model/Student");

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://Rudra01:Rpsj123@nodeself.whijtvy.mongodb.net/collegeDB")
.then(()=>{
    console.log("Connected to mongodb");
})
.catch((err)=>{
    console.log("error connecting to mongodb: ",err);
})

//Student APIs
app.post("/students", async(req,res)=>{
    const student = new Student(req.body);
    await student.save();
    res.send(student);
})

app.get("/students", async(req, res)=>{
    const data = await Student.find({});
    res.json(data);     
})

app.put("/students/:id", async(req,res)=>{
    await Student.findByIdAndUpdate(req.params.id,req.body);
    res.send("Student updated")
})

app.delete("/students/:id", async(req,res)=>{
    await Student.findByIdAndDelete(req.params.id);
    res.send("student deleted");
})

//Teacher APIs
app.post("/teachers", async(req,res)=>{
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.send(teacher);
})

app.get("/teachers", async(req,res)=>{
    const data = await Teacher.find({});
    res.json(data);
})

app.put("/teachers/:id", async(req,res)=>{
    await Teacher.findByIdAndUpdate(req.params.id, req.body);
    res.send("Teacher updated");
})

app.delete("/teachers/:id", async(req,res)=>{
    await Teacher.findByIdAndDelete(req.params.id);
    res.send("Teacher deleted");
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})