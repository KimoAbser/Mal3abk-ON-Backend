const PlayerSkill = require('../model/PlayerSkill'); // Import the PlayerSkill model

module.exports = {

// GET all playerSkills
getAllPlayerSkills: async (req, res) => {
  try {
    const playerSkills = await PlayerSkill.findAll();
    console.log('Retrieved playerSkills:', playerSkills); // Add this line for logging
    res.json(playerSkills);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

//GET playerSkill by ID
getPlayerSkillById: async (req, res) => {
  const playerSkillId = req.params.id;

  try {
    const playerSkill = await PlayerSkill.findByPk(playerSkillId);

    if (playerSkill) {
      res.json(playerSkill);
    } else {
      res.status(404).json({ error: 'PlayerSkill not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// POST a new playerSkill
newPlayerSkill: async (req, res) => {
  try {
    const { userId, skillId, value} = req.body;
    
    // Create a new playerSkill record in the database
    const newPlayerSkill = await PlayerSkill.create({
      userId,
      skillId,
      value
    });
    
    res.status(201).json(newPlayerSkill);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},


// PUT (update) a playerSkill by ID
updatePlayerSkillById: async (req, res) => {
  const playerSkillId = req.params.id;
  const updatedPlayerSkillFields = req.body;

  try {
    const playerSkill = await PlayerSkill.findByPk(playerSkillId);

    if (playerSkill) {
      await playerSkill.update(updatedPlayerSkillFields);
      res.json(playerSkill);
    } else {
      res.status(404).json({ error: 'PlayerSkill not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// DELETE a playerSkill by ID
deletePlayerSkillById: async (req, res) => {
  const playerSkillId = req.params.id;

  try {
    const playerSkill = await PlayerSkill.findByPk(playerSkillId);

    if (playerSkill) {
      await playerSkill.destroy();
      res.sendStatus(204); // No content, successful delete
    } else {
      res.status(404).json({ error: 'PlayerSkill not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

}