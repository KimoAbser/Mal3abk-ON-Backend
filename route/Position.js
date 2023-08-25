const express = require('express');
const router = express.Router();
const {getAllPositions,newPosition,getPositionById,updatePositionById,deletePositionById} = require('../logic/Position');

// GET all positions
router.get('/', getAllPositions);

//GET position by ID
router.get('/:id', getPositionById); 

// POST a new position
router.post('/', newPosition);

// PUT (update) a position by ID
router.put('/:id', updatePositionById);

// DELETE a position by ID
router.delete('/:id', deletePositionById);

module.exports =router;
