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
        },
        username:{
            type:String,
            required:[true],
            unique:[true]
        },
        password: {
            type: String,
            required: [true]
        },

    }
)

const User = mongoose.model('User', UserScheme);
module.exports = User;
