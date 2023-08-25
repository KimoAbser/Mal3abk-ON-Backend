const express = require('express');
const router = express.Router();
const {getAllGroundTypes,newGroundType,getGroundTypeById,updateGroundTypeById,deleteGroundTypeById} = require('../logic/GroundType');

// GET all groundTypes
router.get('/', getAllGroundTypes);

//GET groundType by ID
router.get('/:id', getGroundTypeById); 

// POST a new groundType
router.post('/', newGroundType);

// PUT (update) a groundType by ID
router.put('/:id', updateGroundTypeById);

// DELETE a groundType by ID
router.delete('/:id', deleteGroundTypeById);

module.exports =router;
