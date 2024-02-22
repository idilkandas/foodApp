const mongoose=require('mongoose')

const PostSchema=new mongoose.Schema({
   resim:{type:String, require:true},
    baslik:{type:String , require:true},
    icerik:{type:String , require:true}
    
})
module.exports = mongoose.model('Post', PostSchema)