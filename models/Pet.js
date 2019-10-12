const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const PetSchema=new Schema({
    ad:String,
    cins:String,
    sahipid:Schema.Types.ObjectId,
    kilo:Number,
    image:String,
},{versionKey:false});

module.exports = mongoose.model("pet",PetSchema);