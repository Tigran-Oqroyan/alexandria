const Username = require('../models/username.model.js');

const getUsername = async(request, response) => {
    try{
        const {id} = request.params;
        const username = await Username.findById(id);
        response.status(200).json(username);
    }catch(error){
        response.status(500).json({message: error.message})
    }
}

const postUsername = async(request, response) => {
    try{
        await Username.create(request.body);
    }catch(error){
        response.status(500).json({message: error.message});
    }
    response.send(request.body)
}

module.exports = {
    getUsername,
    postUsername
}