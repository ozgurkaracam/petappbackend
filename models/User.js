const mongoose=require('mongoose');
const Schema=mongoose.Schema;



const UserSchema=new Schema({
    username:{type:String,unique:true,required:true,dropDups:true},
    password:String,
    emailadress:{type:String,unique:true,required:true,dropDups:true},
    verification_code:String,
    status:Number

},{versionKey:false});

module.exports=mongoose.model("userss",UserSchema);