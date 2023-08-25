const express = require('express');
const router = express.Router();
const {getAllPlayerPositions,newPlayerPosition,getPlayerPositionById,updatePlayerPositionById,deletePlayerPositionById} = require('../logic/PlayerPosition');

// GET all playerPositions
router.get('/', getAllPlayerPositions);

//GET playerPosition by ID
router.get('/:id', getPlayerPositionById); 

// POST a new playerPosition
router.post('/', newPlayerPosition);

// PUT (update) a playerPosition by ID
router.put('/:id', updatePlayerPositionById);

// DELETE a playerPosition by ID
router.delete('/:id', deletePlayerPositionById);

module.exports =router;
