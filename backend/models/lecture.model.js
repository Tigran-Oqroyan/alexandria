const mongoose = require('mongoose');

const LectureScheme = mongoose.Schema(
    {
         _id:{
            type:Number,
            require:[true]
         },
         title:{
            type:String,
            require:[true]
         },
         university:{
            type:String,
            require:[true]
         },
         category:{
            type:String,
            require:[true]
         },
         username:{
            type:String,
            require:[true]
         },
         studentName:{
            type:String,
            require:[true]
         },
         studentSurname:{
            type:String,
            require:[true]
         },
         description:{
            type:String,
            require:[true]
         },
         uploadDate:{
            type:String,
            require:[true]
         }
    }
)

const Lecture = mongoose.model('Lecture', LectureScheme);
module.exports = Lecture;
