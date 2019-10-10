const mongoose=require('mongoose');

module.exports=()=>{
    mongoose.connect("mongodb+srv://admin:asdasd31@cluster0-lwzmp.mongodb.net/petapp?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology:true });
    mongoose.connection.on('open',()=>console.log("Bağlantı Başarılı"));
    mongoose.connection.on('error',()=>(err)=>console.log("hata "+err.message()))
}