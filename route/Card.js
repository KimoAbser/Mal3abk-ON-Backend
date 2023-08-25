const express = require('express');
const router = express.Router();
const {getAllCards,newCard,getCardById,updateCardById,deleteCardById} = require('../logic/Card');

// GET all cards
router.get('/', getAllCards);

//GET card by ID
router.get('/:id', getCardById); 

// POST a new card
router.post('/', newCard);

// PUT (update) a card by ID
router.put('/:id', updateCardById);

// DELETE a card by ID
router.delete('/:id', deleteCardById);

module.exports =router;
