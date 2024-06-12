const mongoose = require('mongoose');

const UserScheme = mongoose.Schema(
    {
        name:{
            type:String,
            require:[true]
        },
        surname:{
            type:String,
            require:[true]
        }
    }
)

const User = mongoose.model('User' , UserScheme);
module.exports = User;
