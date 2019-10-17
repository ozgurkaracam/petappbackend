<<<<<<< HEAD

const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var DuyuruSchema=new Schema({
    duyurutext:String,
    duyururesim:{type:String, default:""},
    duyurutarih:{type:Date, default:Date.now()}
});

=======
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var DuyuruSchema=new Schema({
    duyurutext:String,
    duyururesim:{type:String, default:""},
    duyurutarih:{type:Date, default:Date.now()}
});

>>>>>>> 95a111cd7373fd16db48c5baf85e0ba30eeea49f
module.exports=mongoose.model("duyuru",DuyuruSchema);