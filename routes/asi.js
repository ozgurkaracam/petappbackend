const express=require('express');
const router=express.Router();

var Asi=require('../models/Asi');

router.get('/',(req,res,next)=>{
    Asi.find({},(err,data)=>{
        if(err)
            res.json(err);
        else
            res.json(data);
    }).populate('pet');
});

router.post('/',(req,res,next)=>{
    Asi.insertMany(req.body,(err,data)=>{
        if(err)
            res.json(err);
        else
            res.json(data);
    });
});

router.get('/sahip/:id',(req,res,next)=>{
    
    Asi.find({},(err,data)=>{
        if(err)
            res.json(err);
        else{
            var asilar=[];
            data.forEach((item,index)=>{
               if(req.params.id==item.pet.sahipid){
                   asilar.push(item);
               }
            });
            
            res.json(asilar);
        }
            
    }).populate('pet');
});

module.exports=router;