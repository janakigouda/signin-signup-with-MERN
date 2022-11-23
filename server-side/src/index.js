const express = require("express");
const connect = require("./config/db");
require("dotenv").config();
const UserModel =require("./model/user.model");
const cors = require('cors');

const app = express();
app.use(cors());

let PORT=process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/signup",async(req,res)=>{
    const {username,email,age,password}=req.body;
    const user=new UserModel({username,email,age,password});
    await user.save();
    res.status(200).send("User registered successfully");
});

app.post("/signin",async(req,res)=>{
    const {email,password}=req.body;
    const user=await UserModel.findOne({email,password});
    if(!user){
        return res.status(401).send("Invalid credentials");
    }
    res.status(200).send("Login success");
});

app.listen(PORT, async() => {
    try{
        await connect();
        console.log(`listening on port http://localhost:${PORT}`);
    }catch(e){
        console.log(e.message);
    }
});
