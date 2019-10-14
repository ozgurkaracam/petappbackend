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
    Cevap.insertMany(req.body,(err,data)=>{
    if(err)
            res.send(err);
        else{
            Soru.findByIdAndUpdate(req.body.question,{'$push':{'askes':data._id}},(err,data)=>{
                if(err)
                    res.json(err);
            });
            res.json(data);
        }
            
            
    });
});

router.post("/ss",(req,res,next)=>{
    Soru.findByIdAndUpdate("5da2168796d22c450c50a141",{'$push':{'askes':'5da2543a426b1817a071ca43'}},(err,data)=>{
        if(err)
            res.json(err);
        else
        res.json(data);
    });
});

module.exports = router;