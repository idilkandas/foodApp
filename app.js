const exphbs = require('express-handlebars');   
const express=require('express')
const app = express()
const port = 3000
const hostname='127.0.0.1'
const path=require('path')

// const {Schema}=mongoose;
const mongoose=require('mongoose')
const bodyParser = require('body-parser')
mongoose.connect('mongodb://127.0.0.1/yemekTarif_Db')

app.use(express.static('filee'))//bu sayede style.css sayfasının kullanılacağı yerlerde file isimli dosyanın linkte gösterilmesine gerek kalmadı index.html de bakılabilir.
app.use(express.static('anasayfalar'))
app.use(express.static('site2'))
// app.use(express.static('anasayfalar/first.js'))
app.engine('handlebars', exphbs());//exphbs fonksiyonu direkt layout altındaki main.handlebars'ta olan kodlara gider bu yüzden sayfanın adı değiştitilemez 
app.set('view engine', 'handlebars');
const { body, validationResult } = require('express-validator');

//formdan girilen json verilerini okuyabilmesi için gerekli
//forma da enctype eklenmeli çok önemli !!
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//açıklama bitti
const bcrypt = require('bcrypt');
const users=require('./routes/users');
const User = require('./models/User');
const Yon=require('./models/Yön')

const posts=require('./routes/posts')
const yon=require('./routes/yön');
app.use('/' , users)
app.use('/' , posts)
app.use('/' , yon)


app.get('/' ,(req,res)=>{
res.sendFile(path.resolve(__dirname , 'anasayfalar/index.html'))
})

app.listen(port, hostname, () => {
console.log(`server çalışıyor.. , http://${hostname}:${port}/`)
})