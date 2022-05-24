const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    state:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    country:{
        type:String,
        require:true,
    },
    city:{
        type:String,
        require:true,
    },
    zip:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        required:true
    }
})


module.exports=mongoose.model('User', userSchema)