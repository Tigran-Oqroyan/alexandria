const express = require('express');
const router = express.Router();

const {
    getUsers,
    getUserByUsername,
    postUser,
    updateUser,
    deleteUser
} = require('../controllers/user.controller.js');

router.get('/', getUsers)
router.post('/', postUser)
router.get('/:id', getUserByUsername)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router;