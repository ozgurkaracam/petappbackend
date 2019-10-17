
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var DuyuruSchema=new Schema({
    duyurutext:String,
    duyururesim:{type:String, default:""},
    duyurutarih:{type:Date, default:Date.now()}
});

module.exports=mongoose.model("duyuru",DuyuruSchema);