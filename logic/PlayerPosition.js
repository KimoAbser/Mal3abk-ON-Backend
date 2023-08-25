const PlayerPosition = require('../model/PlayerPosition'); // Import the PlayerPosition model

module.exports = {

// GET all playerPositions
getAllPlayerPositions: async (req, res) => {
  try {
    const playerPositions = await playerPlayerPosition.findAll();
    console.log('Retrieved playerPositions:', playerPositions); // Add this line for logging
    res.json(playerPositions);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

//GET playerPosition by ID
getPlayerPositionById: async (req, res) => {
  const playerPositionId = req.params.id;

  try {
    const playerPosition = await playerPlayerPosition.findByPk(playerPositionId);

    if (playerPosition) {
      res.json(playerPosition);
    } else {
      res.status(404).json({ error: 'PlayerPosition not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// POST a new playerPosition
newPlayerPosition: async (req, res) => {
  try {
    const { userId,primaryPositionId,secondaryPositionId} = req.body;
    
    // Create a new playerPosition record in the database
    const newPlayerPosition = await PlayerPosition.create({
      userId,
      primaryPositionId,
      secondaryPositionId
    });
    
    res.status(201).json(newPlayerPosition);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},


// PUT (update) a playerPosition by ID
updatePlayerPositionById: async (req, res) => {
  const playerPositionId = req.params.id;
  const updatedPlayerPositionFields = req.body;

  try {
    const playerPosition = await PlayerPosition.findByPk(playerPositionId);

    if (playerPosition) {
      await playerPosition.update(updatedPlayerPositionFields);
      res.json(playerPosition);
    } else {
      res.status(404).json({ error: 'PlayerPosition not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// DELETE a playerPosition by ID
deletePlayerPositionById: async (req, res) => {
  const playerPositionId = req.params.id;

  try {
    const playerPosition = await PlayerPosition.findByPk(playerPositionId);

    if (playerPosition) {
      await playerPosition.destroy();
      res.sendStatus(204); // No content, successful delete
    } else {
      res.status(404).json({ error: 'PlayerPosition not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

}