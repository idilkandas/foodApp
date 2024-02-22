const express=require('express')
const mongoose=require('mongoose')
const router =express.Router();
const Post=require('../models/Post')
const app=express()
const path=require('path');
const { post } = require('./users');
const { Console } = require('console');
app.use(express.static('anasayfalar'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('anasayfalar'))

router.get('/post',(req,res)=>{
    res.render('site2/post')
})
router.get('/urun',(req,res)=>{
    Post.find({}).lean().then(posts=>{
res.render('site2/urun', {posts:posts})
    })
    
})
router.post('/urun',async(req,res)=>{
try{
    const {resim, baslik , icerik}=req.body
const newPost= new Post({resim, baslik, icerik})
await newPost.save()
}
catch(error){
console.log(error)
}
})





router.post('/urun/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        await Post.findByIdAndDelete(postId);
        res.redirect('/urun');
    } catch (error) {
        console.log(error);
        res.status(500).send('Ürün silinirken bir hata oluştu.');
    }
});


module.exports=router;