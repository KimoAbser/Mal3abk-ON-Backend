const express = require('express');
const router = express.Router();
const {getAllPayments,newPayment,getPaymentById,updatePaymentById,deletePaymentById} = require('../logic/Payment');

// GET all payments
router.get('/', getAllPayments);

//GET payment by ID
router.get('/:id', getPaymentById); 

// POST a new payment
router.post('/', newPayment);

// PUT (update) a payment by ID
router.put('/:id', updatePaymentById);

// DELETE a payment by ID
router.delete('/:id', deletePaymentById);

module.exports =router;
