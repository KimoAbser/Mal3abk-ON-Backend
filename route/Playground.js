const express = require('express');
const router = express.Router();
const {getAllPlaygrounds,newPlayground,getPlaygroundById,updatePlaygroundById,deletePlaygroundById} = require('../logic/Playground');

// GET all playgrounds
router.get('/', getAllPlaygrounds);

//GET playground by ID
router.get('/:id', getPlaygroundById); 

// POST a new playground
router.post('/', newPlayground);

// PUT (update) a playground by ID
router.put('/:id', updatePlaygroundById);

// DELETE a playground by ID
router.delete('/:id', deletePlaygroundById);

module.exports =router;
