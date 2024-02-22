const express=require('express')
const mongoose=require('mongoose')
const router =express.Router();
const Post=require('../models/Post')
const app=express()
const path=require('path')
app.use(express.static('anasayfalar'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('anasayfalar'))



router.get('/indexx', (req, res) => {
    try {
        res.render('site2/indexx');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})
router.get('/urun' , (req,res)=>{
    try{
        res.render('site2/urun')
    }
    catch{
        console.log(error, 'sorun oluştu')
    }
})



module.exports=router;