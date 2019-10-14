var express=require('express');
var router=express.Router();

var Pet=require('../models/Pet');

router.get('/',(req,res,next)=>{
    
    Pet.find({},(err,data)=>{
        if(err)
            res.json({"error":"hata"});
        else
            res.json(data);
    });
});

router.get('/:id',(req,res,next)=>{
        Pet.find({sahipid:req.params.id},(err,data)=>{
                if(err){
                    res.json(err);
                }
                else{
                    res.json(data)
                }
        })
});
router.delete('/',(req,res,next)=>{
    
        Pet.deleteMany({},(err,data)=>{
            res.send({"success":"success"});
        });
    

});
router.delete('/:id',(req,res,next)=>{
        Pet.deleteMany({},(err,data)=>{
            res.send({"success":"success"});
        });

});

router.post('/',(req,res,next)=>{
    const {ad,cins,sahipid,kilo,image}=req.body;
    console.log("qweqw");
    var pet=new Pet({
        ad:ad,
        cins:cins,
        sahipid:[sahipid],
        kilo:kilo,
        image:image
    });
    pet.save((err,data)=>{
        if(err){
            res.json(err.message);
        }
        else{
            res.json({"status":1,data})
        }
    });
});

module.exports=router;