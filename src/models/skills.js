const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const skillsSchema= new Schema({

    name:{
        type:String,
        required:false
    },
    desc:{
        type:String,
        required:false
    }
});

module.exports=mongoose.model('skills',skillsSchema);
