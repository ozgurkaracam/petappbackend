const mongoose=require('mongoose');
mongoose.set('useCreateIndex', true);
<<<<<<< HEAD
=======

>>>>>>> 95a111cd7373fd16db48c5baf85e0ba30eeea49f
module.exports=()=>{
    mongoose.connect("mongodb+srv://admin:asdasd31@cluster0-lwzmp.mongodb.net/petapp?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false });
    mongoose.connection.on('open',()=>console.log("Bağlantı Başarılı"));
    mongoose.connection.on('error',()=>(err)=>console.log("hata "+err.message()))
}