<<<<<<< HEAD
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

=======
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

>>>>>>> 95a111cd7373fd16db48c5baf85e0ba30eeea49f
module.exports=router;