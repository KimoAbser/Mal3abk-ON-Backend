const express = require('express');
const router = express.Router();
const {getAllSkills,newSkill,getSkillById,updateSkillById,deleteSkillById} = require('../logic/Skills');

// GET all skills
router.get('/', getAllSkills);

//GET skill by ID
router.get('/:id', getSkillById); 

// POST a new skill
router.post('/', newSkill);

// PUT (update) a skill by ID
router.put('/:id', updateSkillById);

// DELETE a skill by ID
router.delete('/:id', deleteSkillById);

module.exports =router;
