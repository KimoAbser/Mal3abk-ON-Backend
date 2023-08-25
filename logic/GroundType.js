const GroundType = require('../model/GroundType'); // Import the GroundType model

module.exports = {

// GET all groundTypes
getAllGroundTypes: async (req, res) => {
  try {
    const groundTypes = await GroundType.findAll();
    console.log('Retrieved groundTypes:', groundTypes); // Add this line for logging
    res.json(groundTypes);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

//GET groundType by ID
getGroundTypeById: async (req, res) => {
  const groundTypeId = req.params.id;

  try {
    const groundType = await GroundType.findByPk(groundTypeId);

    if (groundType) {
      res.json(groundType);
    } else {
      res.status(404).json({ error: 'GroundType not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// POST a new groundType
newGroundType: async (req, res) => {
  try {
    const { type } = req.body;
    
    // Create a new groundType record in the database
    const newGroundType = await GroundType.create({
      type
    });
    
    res.status(201).json(newGroundType);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},


// PUT (update) a groundType by ID
updateGroundTypeById: async (req, res) => {
  const groundTypeId = req.params.id;
  const updatedGroundTypeFields = req.body;

  try {
    const groundType = await GroundType.findByPk(groundTypeId);

    if (groundType) {
      await groundType.update(updatedGroundTypeFields);
      res.json(groundType);
    } else {
      res.status(404).json({ error: 'GroundType not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// DELETE a groundType by ID
deleteGroundTypeById: async (req, res) => {
  const groundTypeId = req.params.id;

  try {
    const groundType = await GroundType.findByPk(groundTypeId);

    if (groundType) {
      await groundType.destroy();
      res.sendStatus(204); // No content, successful delete
    } else {
      res.status(404).json({ error: 'GroundType not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

}