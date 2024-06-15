const mongoose = require('mongoose');

const UsernameScheme = mongoose.Schema(
    {
        _id:{
            type:String,
            require:[true]
        },
        username:{
            type:String,
            require:[true]
        }
    }
)

const Username = mongoose.model('Username', UsernameScheme);
module.exports = Username;