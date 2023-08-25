const express = require('express');
const router = express.Router();
const {getAllPaymentMethods,newPaymentMethod,getPaymentMethodById,updatePaymentMethodById,deletePaymentMethodById} = require('../logic/PaymentMethod');

// GET all paymentMethods
router.get('/', getAllPaymentMethods);

//GET paymentMethod by ID
router.get('/:id', getPaymentMethodById); 

// POST a new paymentMethod
router.post('/', newPaymentMethod);

// PUT (update) a paymentMethod by ID
router.put('/:id', updatePaymentMethodById);

// DELETE a paymentMethod by ID
router.delete('/:id', deletePaymentMethodById);

module.exports =router;
