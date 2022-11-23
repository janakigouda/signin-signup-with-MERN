const { Schema, model } = require("mongoose");

const UserSchema=new Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    age:{type:Number,min:20,max:100},
    password:{type:String,required:true},
})

const UserModel=model("user",UserSchema);

module.exports=UserModel;