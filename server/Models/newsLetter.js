const mongoose =require('mongoose');

const newSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
    }
})

module.exports=  mongoose.model('newsletter',newSchema)