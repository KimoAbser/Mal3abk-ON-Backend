const express = require('express');
const router = express.Router();
const {getAllBanks,newBank,getBankById,updateBankById,deleteBankById} = require('../logic/Bank');

// GET all banks
router.get('/', getAllBanks);

//GET bank by ID
router.get('/:id', getBankById); 

// POST a new bank
router.post('/', newBank);

// PUT (update) a bank by ID
router.put('/:id', updateBankById);

// DELETE a bank by ID
router.delete('/:id', deleteBankById);

module.exports =router;
