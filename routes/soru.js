const express=require('express');
const router=express.Router();

var Soru=require('../models/Soru');

router.get('/',(req,res,next)=>{
    
    Soru.find({},(err,data)=>{
        if(err)
            res.json({"error":"hata"});
        else
            res.json(data);
    });
});

router.post('/',(req,res,next)=>{
    Soru.insertMany(req.body,(err,data)=>{
        if(err)
            res.send(err);
        else
            res.json(data);
    });
});

module.exports = router;