const Playground = require('../model/Playground'); // Import the Playground model

module.exports = {

// GET all playGrounds
getAllPlaygrounds: async (req, res) => {
  try {
    const playGrounds = await Playground.findAll();
    console.log('Retrieved playGrounds:', playGrounds); // Add this line for logging
    res.json(playGrounds);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

//GET playGround by ID
getPlaygroundById: async (req, res) => {
  const playGroundId = req.params.id;

  try {
    const playGround = await Playground.findByPk(playGroundId);

    if (playGround) {
      res.json(playGround);
    } else {
      res.status(404).json({ error: 'Playground not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// POST a new playGround
newPlayground: async (req, res) => {
  try {
    const { name, area, capacity, groundTypeId, ballTypeId, dressingroom, showerroom, bathroom,
       playersWaitingArea, parking, dayHourCost, nightHourCost, rate, openingTime, closingTime, video, ownerId } = req.body;
    
    // Create a new playGround record in the database
    const newPlayground = await Playground.create({
      name,
      area,
      capacity,
      groundTypeId,
      ballTypeId,
      dressingroom,
      showerroom,
      bathroom,
      playersWaitingArea,
      parking,
      dayHourCost,
      nightHourCost,
      rate,
      openingTime,
      closingTime,
      video,
      ownerId
    });
    
    res.status(201).json(newPlayground);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},


// PUT (update) a playGround by ID
updatePlaygroundById: async (req, res) => {
  const playGroundId = req.params.id;
  const updatedPlaygroundFields = req.body;

  try {
    const playGround = await Playground.findByPk(playGroundId);

    if (playGround) {
      await playGround.update(updatedPlaygroundFields);
      res.json(playGround);
    } else {
      res.status(404).json({ error: 'Playground not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// DELETE a playGround by ID
deletePlaygroundById: async (req, res) => {
  const playGroundId = req.params.id;

  try {
    const playGround = await Playground.findByPk(playGroundId);

    if (playGround) {
      await playGround.destroy();
      res.sendStatus(204); // No content, successful delete
    } else {
      res.status(404).json({ error: 'Playground not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

}