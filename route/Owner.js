const express = require('express');
const router = express.Router();
const {getAllOwners,newOwner,getOwnerById,updateOwnerById,deleteOwnerById,login} = require('../logic/Owner');

// GET all owners
router.get('/', getAllOwners);

//GET owner by ID
router.get('/:id', getOwnerById); 

// POST a new owner
router.post('/', newOwner);

// PUT (update) a owner by ID
router.put('/:id', updateOwnerById);

// DELETE a owner by ID
router.delete('/:id', deleteOwnerById);

// Owner Login
router.post('/login', login) ;

module.exports =router;
