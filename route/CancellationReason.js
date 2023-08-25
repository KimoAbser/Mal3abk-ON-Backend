const express = require('express');
const router = express.Router();
const {getAllCancellationReasons,newCancellationReason,getCancellationReasonById,updateCancellationReasonById,deleteCancellationReasonById} = require('../logic/CancellationReason');

// GET all cancellationReasons
router.get('/', getAllCancellationReasons);

//GET cancellationReason by ID
router.get('/:id', getCancellationReasonById); 

// POST a new cancellationReason
router.post('/', newCancellationReason);

// PUT (update) a cancellationReason by ID
router.put('/:id', updateCancellationReasonById);

// DELETE a cancellationReason by ID
router.delete('/:id', deleteCancellationReasonById);

module.exports =router;
