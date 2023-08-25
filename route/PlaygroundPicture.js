const express = require('express');
const router = express.Router();
const {getAllPlayGroundPictures,newPlayGroundPicture,getPlayGroundPictureById,updatePlayGroundPictureById,deletePlayGroundPictureById} = require('../logic/PlaygroundPicture');

// GET all playGroundPictures
router.get('/', getAllPlayGroundPictures);

//GET playGroundPicture by ID
router.get('/:id', getPlayGroundPictureById); 

// POST a new playGroundPicture
router.post('/', newPlayGroundPicture);

// PUT (update) a playGroundPicture by ID
router.put('/:id', updatePlayGroundPictureById);

// DELETE a playGroundPicture by ID
router.delete('/:id', deletePlayGroundPictureById);

module.exports =router;
