const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const PetSchema=new Schema({
    ad:String,
    cins:String,
    sahipid:{type:Schema.Types.ObjectId,'ref':'user'},
    kilo:Number,
    image:String,
},{versionKey:false});

module.exports = mongoose.model("pet",PetSchema);