const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const PetSchema=new Schema({
    ad:String,
    cins:String,
    sahipid:Number,
    kilo:Number,
    image:String,
},{versionKey:false});

module.exports = mongoose.model("petsw",PetSchema);