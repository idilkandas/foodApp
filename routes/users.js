 const express=require('express')
  const app=express()
 const mongoose=require('mongoose')
 const router=express.Router();
 const path=require('path')
 // app.use(express.static('anasayfalar'))
 const User=require('../models/User')
 const bcrypt = require('bcrypt');



 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));



 router.get('/register', (req, res) => {
     try {
         res.render('site2/register');
     } catch (error) {
         console.error(error);
         res.status(500).send('Internal Server Error');
     }
 })
//orijinall
//  router.post('/register', async (req, res) => {
//      try {
//          const { username, email, password } = req.body;
//          const newUser = new User({ username, email, password });
//          await newUser.save();
//           res.redirect('/')
//           res.status(201).send('Kullanıcı başarıyla kaydedildi.');
//      } catch (error) {
//          console.error(error);
//          res.status(500).send('Bir hata oluştu.');
//      }
//  });
    router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.render('site2/indexx');
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu.');
    }
});
 router.get('/login', (req, res) => {
     try {
         res.render('site2/login');
     } catch (error) {
         console.error(error);
         res.status(500).send('Internal Server Error');
     }
 })


 router.post('/login', (req, res)=>{
    const {email, password} = req.body;
 User.findOne({email}).then((user) => {
 if(user){
 if(user.password == password){
res.render('site2/indexx');
} else {
        res.render('site2/login');
    }
 } else {
res.redirect('/register');
}
}).catch(error => {
console.error('Bir hata oluştu:', error);
 res.status(500).send('Bir hata oluştu');
 });
});


router.get('/delete', (req,res)=>{
  try{
    res.render('site2/delete')}
    catch(error) {
console.log(error)
    }
})


router.post('/delete', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Kullanıcıyı bul
        const user = await User.findOne({ email });

        // Kullanıcı var mı kontrol et
        if (!user) {
            return res.status(404).send('Kullanıcı bulunamadı');
        }

        // Şifre doğrulaması yap
        if (user.password !== password) {
            return res.status(401).send('Kullanıcı adı veya şifre yanlış');
        }

        // Kullanıcıyı sil
        await User.deleteOne({ email });

        res.sendFile(path.resolve(__dirname, '../anasayfalar/index.html'));
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu.');
    }
});
module.exports=router;
