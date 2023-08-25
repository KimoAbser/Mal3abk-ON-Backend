const Position = require('../model/Position'); // Import the Position model

module.exports = {

// GET all positions
getAllPositions: async (req, res) => {
  try {
    const positions = await Position.findAll();
    console.log('Retrieved positions:', positions); // Add this line for logging
    res.json(positions);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

//GET position by ID
getPositionById: async (req, res) => {
  const positionId = req.params.id;

  try {
    const position = await Position.findByPk(positionId);

    if (position) {
      res.json(position);
    } else {
      res.status(404).json({ error: 'Position not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// POST a new position
newPosition: async (req, res) => {
  try {
    const { position} = req.body;
    
    // Create a new position record in the database
    const newPosition = await Position.create({
      position
    });
    
    res.status(201).json(newPosition);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},


// PUT (update) a position by ID
updatePositionById: async (req, res) => {
  const positionId = req.params.id;
  const updatedPositionFields = req.body;

  try {
    const position = await Position.findByPk(positionId);

    if (position) {
      await position.update(updatedPositionFields);
      res.json(position);
    } else {
      res.status(404).json({ error: 'Position not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// DELETE a position by ID
deletePositionById: async (req, res) => {
  const positionId = req.params.id;

  try {
    const position = await Position.findByPk(positionId);

    if (position) {
      await position.destroy();
      res.sendStatus(204); // No content, successful delete
    } else {
      res.status(404).json({ error: 'Position not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

}