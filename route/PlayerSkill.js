const express = require('express');
const router = express.Router();
const {getAllPlayerSkills,newPlayerSkill,getPlayerSkillById,updatePlayerSkillById,deletePlayerSkillById} = require('../logic/PlayerSkill');

// GET all playerSkills
router.get('/', getAllPlayerSkills);

//GET playerSkill by ID
router.get('/:id', getPlayerSkillById); 

// POST a new playerSkill
router.post('/', newPlayerSkill);

// PUT (update) a playerSkill by ID
router.put('/:id', updatePlayerSkillById);

// DELETE a playerSkill by ID
router.delete('/:id', deletePlayerSkillById);

module.exports =router;
