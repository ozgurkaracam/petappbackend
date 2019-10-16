const express=require('express');
const router=express.Router();

var Soru=require('../models/Soru');

router.get('/',(req,res,next)=>{
    
    Soru.find({},(err,data)=>{
        if(err)
            res.json({"error":"hata"});
        else
            res.json(data);
    }).populate('askes');
});

router.post('/',(req,res,next)=>{
    Soru.insertMany(req.body,(err,data)=>{
        if(err)
            res.send(err);
        else
            res.json(data);
    });
});

router.get('/populate',function(req,res,next){
    Soru.find({}).populate('askes').then(data=>{
        res.json(data)
    }
    ).catch(e=>res.json(e));
});

router.get('/:id',function(req,res,next){
    Soru.find({creator:req.params.id},(err,data)=>{
        err ? res.json(err) : res.json(data);
    }).populate('askes');
});

router.delete('/:id',function(req,res,next){
   Soru.findByIdAndDelete(req.params.id,(err,data)=>{
       if(err)
        res.json(err);
        else
        res.json(data);
   });
});

module.exports = router;