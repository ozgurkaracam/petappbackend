const express=require('express');
const router=express.Router();

var Cevap=require('../models/Cevap');
var Soru=require('../models/Soru');

router.get('/',(req,res,next)=>{
    
    Cevap.find({},(err,data)=>{
        if(err)
            res.json({"error":"hata"});
        else
            res.json(data);
    });
});

router.post('/',(req,res,next)=>{
    var cevap=new Cevap(res.body);
    cevap.save((err,data)=>{
        
    });
    Cevap.insertMany(req.body,(err,data)=>{
    
        Soru.findByIdAndUpdate({_id:req.body.question},{'$push' : {"askes": data[0]._id}});
        
        if(err)
            res.send(err);
        else
            res.json(data);
    });
});

module.exports = router;