const express = require('express');
const router = express.Router();
const {getAllGovernments,newGovernment,getGovernmentById,updateGovernmentById,deleteGovernmentById} = require('../logic/Governments');

// GET all governments
router.get('/', getAllGovernments);

//GET government by ID
router.get('/:id', getGovernmentById); 

// POST a new government
router.post('/', newGovernment);

// PUT (update) a government by ID
router.put('/:id', updateGovernmentById);

// DELETE a government by ID
router.delete('/:id', deleteGovernmentById);

module.exports =router;
