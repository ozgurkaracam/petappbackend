const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const AsiSchema=new Schema({
    tarih:String,
    pet:{type:Schema.Types.ObjectId,ref:'pet'},
    asiad:String,
    asiaciklama:String,
    asidurum:Boolean
},{versionKey:false});

module.exports=mongoose.model("asi",AsiSchema);