const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const SoruSchema=new Schema({
    questiontext: String,
    creator:{type: Schema.Types.ObjectId , ref: 'user'},
    askes:[{type:Schema.Types.ObjectId , ref: 'cevap'}]

},{versionKey:false});

module.exports=mongoose.model("soru",SoruSchema);
