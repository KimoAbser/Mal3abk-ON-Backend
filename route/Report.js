const express = require('express');
const router = express.Router();
const {getAllReports,newReport,getReportById,updateReportById,deleteReportById} = require('../logic/Report');

// GET all reports
router.get('/', getAllReports);

//GET report by ID
router.get('/:id', getReportById); 

// POST a new report
router.post('/', newReport);

// PUT (update) a report by ID
router.put('/:id', updateReportById);

// DELETE a report by ID
router.delete('/:id', deleteReportById);

module.exports =router;
