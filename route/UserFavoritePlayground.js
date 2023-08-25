const express = require('express');
const router = express.Router();
const {getAllUserFavoritePlaygrounds,newUserFavoritePlayground,getUserFavoritePlaygroundById,updateUserFavoritePlaygroundById,deleteUserFavoritePlaygroundById} = require('../logic/UserFavoritePlayground');

// GET all userFavoritePlaygrounds
router.get('/', getAllUserFavoritePlaygrounds);

//GET userFavoritePlayground by ID
router.get('/:id', getUserFavoritePlaygroundById); 

// POST a new userFavoritePlayground
router.post('/', newUserFavoritePlayground);

// PUT (update) a userFavoritePlayground by ID
router.put('/:id', updateUserFavoritePlaygroundById);

// DELETE a userFavoritePlayground by ID
router.delete('/:id', deleteUserFavoritePlaygroundById);

module.exports =router;
