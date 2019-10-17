const express=require('express');
const router=express.Router();

const Duyuru=require("../models/Duyuru");

router.get('/',(req,res)=>{
    Duyuru.find({},(err,data)=>{
        err ? res.json(err) : res.json(data);
    });
});

router.post('/',(req,res)=>{
    Duyuru.insertMany(req.body,(err,data)=>{
        err ? res.json(err) : res.json(data);
    });
});

module.exports=router;