const express=require('express');
const router=express.Router();
var format=require('date-format');

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

router.get('/sahip/:id/past',(req,res,next)=>{
    //tarih:{$gt: format(format.ISO8601_FORMAT,) ,}
    Asi.find({},(err,data)=>{
        if(err)
            res.json(err);
        else{
            var asilar=[];
            data.forEach((item,index)=>{
                //var tarih=format('dd/MM/yyyy','11/12/2019');
               if(req.params.id==item.pet.sahipid){
                   asilar.push(item);
               }
            });
            
            res.json(asilar);
        }
            
    }).populate('pet');
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

<<<<<<< HEAD
router.get('/pet/:id',(req,res)=>{
    Asi.find({pet:req.params.id},(err,data)=>{
        err ? res.json(err) : res.json(data);
=======
router.get('/sahip/:id/gecmis',(req,res,next)=>{
    
    Asi.find({},(err,data)=>{
        if(err)
            res.json(err);
        else{
            var asilar=[];
            data.forEach((item,index)=>{
                
                var tarih=format.parse("dd/MM/yyyy", item.tarih).getTime();
                var bugun=Date.now();
               if(req.params.id==item.pet.sahipid && tarih<=bugun){
                   asilar.push(item);
               }
            });
            
            res.json(asilar);
        }
            
    }).populate('pet');
});

router.get('/sahip/:id/gelecek',(req,res,next)=>{
    
    Asi.find({},(err,data)=>{
        if(err)
            res.json(err);
        else{
            var asilar=[];
            data.forEach((item,index)=>{
                
                var tarih=format.parse("dd/MM/yyyy", item.tarih).getTime();
                var bugun=Date.now();
               if(req.params.id==item.pet.sahipid && tarih>bugun){
                   asilar.push(item);
               }
            });
            
            res.json(asilar);
        }
            
>>>>>>> 753506ddb61062a57976772a5598a4dfbc91a18a
    }).populate('pet');
});

module.exports=router;