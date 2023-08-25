const express = require('express');
const router = express.Router();
const {getAllBallTypes,newBallType,getBallTypeById,updateBallTypeById,deleteBallTypeById} = require('../logic/BallType');

// GET all users
router.get('/', getAllBallTypes);

//GET user by ID
router.get('/:id', getBallTypeById); 

// POST a new user
router.post('/', newBallType);

// PUT (update) a user by ID
router.put('/:id', updateBallTypeById);

// DELETE a user by ID
router.delete('/:id', deleteBallTypeById);

module.exports =router;
