var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
var User=require('../models/User');
const uuidv1 = require('uuid/v1');
const verification=uuidv1();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/',(req,res,next)=>{
  const{emailadress,username,password}=req.body;
  var user=new User({
    username:username,
    password:password,
    emailadress:emailadress,
    verification_code:verification,
    status:0
  });
  user.save((err,data)=>{
      if(err)
      res.json({"message":"Kullanıcı Adı veya Email Kullanımda.","status":0});
      else
      res.json({"message":"Kayıt Başarılı. Mailinize gönderilen aktivasyonu onaylayınız.",status:1})
  });
  
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ozgurkaracam55@gmail.com',
      pass: '****'
    }
  });
  var mailOptions = {
    from: 'ozgurkaracam55@gmail.com',
    to: emailadress,
    subject: 'Doğrulama maili.',
    text: 'Kayıt başarılı. Aşağıdaki Linke Tıklayınız.',
    html:'<b> Doğrulama için <a href="http://localhost:3000/users/verification_code/'+verification+'"> TIKLAYINIZ </a></b>'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

});


router.get('/verification_code/:id',(req,res,next)=>{
  var user=new User();
  User.findOneAndUpdate({verification_code:req.params.id},{status:1},(err,data)=>{
    if(!data)
      res.send("<h2>Yanlış doğrulama</h2>");
    else
    res.send("<h1>HESABINIZ AKTİF..</h1>");
  });

  
});

router.post('/login',(req,res,next)=>{
  const {emailadress,password} = req.body;
  User.find({emailadress:emailadress,password:password},(err,data)=>{
    if(err){
      res.json(err);
    }
    else{
      if(data[0]==null){
        res.json({
          id:data._id,
          message:"Kullanıcı Adı veya şifre hatalı",
          status:2,
          username:null
      
      });
      }
      else if(data[0].status==1){
        res.json({
          id:data[0]._id,
          message:"Giriş Başarılı.",
          status:1,
          username:data[0].username
        });
      }
      else{
        res.json({
          id:data[0]._id,
          message:"Aktivasyon sağlayınız",
          status:2,
          username:data[0].username
        
        });
      }
    }

  });
});


module.exports = router;
