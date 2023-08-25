const express = require('express');
const router = express.Router();
const {getAllPlayerLocations,newPlayerLocation,getPlayerLocationById,updatePlayerLocationById,deletePlayerLocationById} = require('../logic/PlayerLocation');

// GET all playerLocations
router.get('/', getAllPlayerLocations);

//GET playerLocation by ID
router.get('/:id', getPlayerLocationById); 

// POST a new playerLocation
router.post('/', newPlayerLocation);

// PUT (update) a playerLocation by ID
router.put('/:id', updatePlayerLocationById);

// DELETE a playerLocation by ID
router.delete('/:id', deletePlayerLocationById);

module.exports =router;
