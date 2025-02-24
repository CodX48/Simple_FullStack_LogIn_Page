import express, { json } from "express";
import mongoose from "mongoose";
import mongo from "./DB/Registerdb.js";
import bcrypt, { hash } from "bcrypt"
import cors from "cors";

mongoose
        .connect("mongodb://localhost:27017")
        .then(()=>{console.log("Connected to the DataBase ;)")});


const app = express();
app.use(json())
app.use(cors(["http://http://localhost:5173/", "http://localhost:5173/login"]))
app.post("/register", async (req, res) => {
    try {
        const { FullName, Gmail, Password } = req.body;

        if (!FullName || !Gmail || !Password) {
            return res.status(400).send("All Data Required");
        }
        const hashedPassword = await bcrypt.hash(Password, 10);
        const data = new mongo({
            FullName,
            Gmail,
            Password: hashedPassword
        });

        await data.save(); 
        res.status(201).send("Data Saved Successfully");
        
    } catch (E) {
        console.error(E); 
        res.status(500).send("Internal Server Error");
    }
});

app.post("/login", async (req,res)=>{
    const {Gmail,Password} = req.body;
    const user = await mongo.findOne({Gmail:Gmail});
    const Checkpass = await bcrypt.compare(Password,user.Password);
    
    if(Checkpass){
        res.send(`Welcome ${user.FullName}`);
    }else{
        res.send("Wrong Information");
        
    }
    })

app.listen(5000,()=>{
    console.log("Connected to the server !!");
})