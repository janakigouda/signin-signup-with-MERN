const mongoose=require("mongoose");
require("dotenv").config();
let MONGO_URL=process.env.MONGO_URL;

let connect=()=>{
    return mongoose.connect(MONGO_URL)
}

module.exports=connect;