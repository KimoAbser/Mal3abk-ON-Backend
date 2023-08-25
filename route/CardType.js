const express = require('express');
const router = express.Router();
const {getAllCardTypes,newCardType,getCardTypeById,updateCardTypeById,deleteCardTypeById} = require('../logic/CardType');

// GET all cardTypes
router.get('/', getAllCardTypes);

//GET cardType by ID
router.get('/:id', getCardTypeById); 

// POST a new cardType
router.post('/', newCardType);

// PUT (update) a cardType by ID
router.put('/:id', updateCardTypeById);

// DELETE a cardType by ID
router.delete('/:id', deleteCardTypeById);

module.exports =router;
