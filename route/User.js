const express = require('express');
const router = express.Router();
const {getAllUsers,newUser,getUserById,updateUserById,deleteUserById, login} = require('../logic/User');

// GET all users
router.get('/', getAllUsers);

//GET user by ID
router.get('/:id', getUserById); 

// POST a new user
router.post('/', newUser);

// PUT (update) a user by ID
router.put('/:id', updateUserById);

// DELETE a user by ID
router.delete('/:id', deleteUserById);

router.post('/login', login) ;



module.exports =router;
