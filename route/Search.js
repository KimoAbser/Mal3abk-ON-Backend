const express = require('express');
const router = express.Router();
const { search } = require('../logic/Search'); // Import the necessary models

// GET playgrounds by search criteria and filter
router.get('/', search) ;

module.exports = router;
