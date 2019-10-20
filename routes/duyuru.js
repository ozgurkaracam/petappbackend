const express=require('express');
const router=express.Router();
var dateformat=require('date-format');

const Duyuru=require("../models/Duyuru");

router.get('/',(req,res)=>{
    var list=[]
    Duyuru.find({},(err,data)=>{
        if(err)
            throw err;
        data.forEach((item,index)=>{
            list.push({
                'duyururesim':item.duyururesim,
                'duyurutarih':dateformat.asString('dd/MM/yyyy hh:mm',item.duyurutarih),
                '_id':item._id,
                'duyurutext':item.duyurutext,
                '__V':item.__v
            });
        });
        res.json(list);
    }).sort({'duyurutarih':-1});
});

router.post('/',(req,res)=>{
    Duyuru.insertMany(req.body,(err,data)=>{
        err ? res.json(err) : res.json(data);
    });
});
module.exports=router;