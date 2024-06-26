const { response } = require('express');
const Lecture = require('../models/lecture.model.js');

const getLectures = async(request, response) => {
    try{
        const lectures = await Lecture.find({})
        response.status(200).json(lectures);
    }catch(error){
        response.status(500).json({message: error.message})
    }
}

const getLectureById = async(request , response) => {
    try{
        const {id} = request.params;
        const lecture = await Lecture.findById(id);
        response.status(200).json(lecture)
    }catch(error){
        response.status(500).json({message: error.message})
    }
}

const postLecture = async(request, response) => {
    try {
        await Lecture.create(request.body);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
    response.send(request.body)
}

const updateLecture = async(request , response) => {
    try{
        const {id} = request.params;
        const lecture = await Lecture.findByIdAndUpdate(id , request.body);
        if(!lecture){
            return response.status(404).json({message: "Lecture not found"})
        }
        const updatedLecture = await Lecture.findById(id);
        response.status(200).json(updatedLecture);
    }catch(error){
        response.status(500).json({message: error.message});
    }
}


const deleteLecture = async( request , response) => {
    try{
        const {id} = request.params;
        const lecture = await Lecture.findByIdAndDelete(id);
        if(!lecture){
            return response.status(404).json({message: "Lecture not found"})
        }
        response.status(200).json({message: "Lecture deleted"} )
    }catch(error){
        response.status(500).json({message:error.message})
    }
}

module.exports = {
    getLectures,
    getLectureById,
    postLecture,
    updateLecture,
    deleteLecture
}