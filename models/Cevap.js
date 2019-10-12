const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CevapSchema=new Schema({
    cevaptext: String,
    question:{type:Schema.Types.ObjectId , ref: 'soru'}

},{versionKey:false});

module.exports=mongoose.model("cevap",CevapSchema);
