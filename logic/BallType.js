const BallType = require('../model/BallType'); // Import the BallType model

module.exports = {

// GET all ballTypes
getAllBallTypes: async (req, res) => {
  try {
    const ballTypes = await BallType.findAll();
    console.log('Retrieved ballTypes:', ballTypes); // Add this line for logging
    res.json(ballTypes);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

//GET ballType by ID
getBallTypeById: async (req, res) => {
  const ballTypeId = req.params.id;

  try {
    const ballType = await BallType.findByPk(ballTypeId);

    if (ballType) {
      res.json(ballType);
    } else {
      res.status(404).json({ error: 'BallType not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// POST a new ballType
newBallType: async (req, res) => {
  try {
    const { type, isActive} = req.body;
    
    // Create a new ballType record in the database
    const newBallType = await BallType.create({
      type,
      isActive
    });
    
    res.status(201).json(newBallType);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},


// PUT (update) a ballType by ID
updateBallTypeById: async (req, res) => {
  const ballTypeId = req.params.id;
  const updatedBallTypeFields = req.body;

  try {
    const ballType = await BallType.findByPk(ballTypeId);

    if (ballType) {
      await ballType.update(updatedBallTypeFields);
      res.json(ballType);
    } else {
      res.status(404).json({ error: 'BallType not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// DELETE a ballType by ID
deleteBallTypeById: async (req, res) => {
  const ballTypeId = req.params.id;

  try {
    const ballType = await BallType.findByPk(ballTypeId);

    if (ballType) {
      await ballType.destroy();
      res.sendStatus(204); // No content, successful delete
    } else {
      res.status(404).json({ error: 'BallType not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

}