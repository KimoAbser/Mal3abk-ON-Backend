const Skill = require('../model/Skills'); // Import the Skill model

module.exports = {

// GET all skills
getAllSkills: async (req, res) => {
  try {
    const skills = await Skill.findAll();
    console.log('Retrieved skills:', skills); // Add this line for logging
    res.json(skills);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

//GET skill by ID
getSkillById: async (req, res) => {
  const skillId = req.params.id;

  try {
    const skill = await Skill.findByPk(skillId);

    if (skill) {
      res.json(skill);
    } else {
      res.status(404).json({ error: 'Skill not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// POST a new skill
newSkill: async (req, res) => {
  try {
    const { name} = req.body;
    
    // Create a new skill record in the database
    const newSkill = await Skill.create({
      name
    });
    
    res.status(201).json(newSkill);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},


// PUT (update) a skill by ID
updateSkillById: async (req, res) => {
  const skillId = req.params.id;
  const updatedSkillFields = req.body;

  try {
    const skill = await Skill.findByPk(skillId);

    if (skill) {
      await skill.update(updatedSkillFields);
      res.json(skill);
    } else {
      res.status(404).json({ error: 'Skill not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// DELETE a skill by ID
deleteSkillById: async (req, res) => {
  const skillId = req.params.id;

  try {
    const skill = await Skill.findByPk(skillId);

    if (skill) {
      await skill.destroy();
      res.sendStatus(204); // No content, successful delete
    } else {
      res.status(404).json({ error: 'Skill not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

}