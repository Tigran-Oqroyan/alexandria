const User = require('../models/user.model.js');

const getUsers = async(request, response) => {
    try{
        const users = await User.find({})
        response.status(200).json(users);
    }catch(error){
        response.status(500).json({message: error.message})
    }
}

const getUserByUsername = async(request, response) => {
    try{
        const {username} = request.params;
        const user = await User.findById(username);
        response.status(200).json(user)
    }catch(error){
        response.status(500).json({message: error.message})
    }
}

const postUser = async(request, response) => {
    try{
        await User.create(request.body);
    }catch(error){
        response.status(500).json({message: error.message})
    }
    response.send(request.body)
}

const updateUser = async(request, response) => {
    try{
        const {username} = request.params;
        const user = await User.findByIdAndUpdate(username, request.body );
        if(!user){
            return response.status(404).json({message:"User not found"})
        }
        const updatedUser = await User.findById(username);
        response.status(200).json(updatedUser);
    }catch(error){
        response.status(500).json({message: error.message})
    }
}

const deleteUser = async(request, response) => {
    try{
        const {username} = request.params;
        const user = await User.findByIdAndDelete(username);
        if(!user){
            return response.status(404).json({message: "User not found"})
        }
        response.status(200).json({message: "User deleted"})
    }catch(error){
        response.status(500).json({message: error.message})
    }
}

module.exports = {
    getUsers,
    getUserByUsername,
    postUser,
    updateUser,
    deleteUser
}