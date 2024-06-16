const mongoose = require('mongoose');

const UserScheme = mongoose.Schema(
    {
        _id:{
            type:String,
            require:[true]
        },
        name:{
            type:String,
            require:[true]
        },
        surname:{
            type:String,
            require:[true]
        },
        username:{
            type:String,
            require:[true]
        },
        password:{
            type:String,
            require:[true]
        },
        repeatPassword:{
            type:String,
            require:[true]
        },
        univercity:{
            type:String,
            require:[true]
        },
        email:{
            type:String,
            require:[true]
        },
        phone:{
            type:String,
            require:[true]
        }
    }
)

const User = mongoose.model('User' , UserScheme);
module.exports = User;
