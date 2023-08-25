const express = require('express');
const router = express.Router();
const { getAllAddingMethods, newAddingMethod, getAddingMethodById, updateAddingMethodById, deleteAddingMethodById } = require('../logic/AddMethod');

// GET all AddingMethod
router.get('/', getAllAddingMethods);

//GET AddingMethod by ID
router.get('/:id', getAddingMethodById);

// POST a new AddingMethod
router.post('/', newAddingMethod);

// PUT (update) a AddingMethod by ID
router.put('/:id', updateAddingMethodById);

// DELETE a AddingMethod by ID
router.delete('/:id', deleteAddingMethodById);

module.exports = router;
