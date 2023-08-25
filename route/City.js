const express = require('express');
const router = express.Router();
const {getAllCitys,newCity,getCityById,updateCityById,deleteCityById} = require('../logic/City');

// GET all citys
router.get('/', getAllCitys);

//GET city by ID
router.get('/:id', getCityById); 

// POST a new city
router.post('/', newCity);

// PUT (update) a city by ID
router.put('/:id', updateCityById);

// DELETE a city by ID
router.delete('/:id', deleteCityById);

module.exports =router;
