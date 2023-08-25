const PlayGroundPicture = require('../model/PlaygroundPicture'); // Import the PlayGroundPicture model

module.exports = {

// GET all playGroundPictures
getAllPlayGroundPictures: async (req, res) => {
  try {
    const playGroundPictures = await PlayGroundPicture.findAll();
    console.log('Retrieved playGroundPictures:', playGroundPictures); // Add this line for logging
    res.json(playGroundPictures);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

//GET playGroundPicture by ID
getPlayGroundPictureById: async (req, res) => {
  const playGroundPictureId = req.params.playgroundid;

  try {
    const playGroundPicture = await PlayGroundPicture.findByPk(playGroundPictureId);

    if (playGroundPicture) {
      res.json(playGroundPicture);
    } else {
      res.status(404).json({ error: 'PlayGroundPicture not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// POST a new playGroundPicture
newPlayGroundPicture: async (req, res) => {
  try {
    const { picture } = req.body;
    
    // Create a new playGroundPicture record in the database
    const newPlayGroundPicture = await PlayGroundPicture.create({
      picture
    });
    
    res.status(201).json(newPlayGroundPicture);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},


// PUT (update) a playGroundPicture by ID
updatePlayGroundPictureById: async (req, res) => {
  const playGroundPictureId = req.params.playgroundid;
  const updatedPlayGroundPictureFields = req.body;

  try {
    const playGroundPicture = await PlayGroundPicture.findByPk(playGroundPictureId);

    if (playGroundPicture) {
      await playGroundPicture.update(updatedPlayGroundPictureFields);
      res.json(playGroundPicture);
    } else {
      res.status(404).json({ error: 'PlayGroundPicture not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// DELETE a playGroundPicture by ID
deletePlayGroundPictureById: async (req, res) => {
  const playGroundPictureId = req.params.playgroundid;

  try {
    const playGroundPicture = await PlayGroundPicture.findByPk(playGroundPictureId);

    if (playGroundPicture) {
      await playGroundPicture.destroy();
      res.sendStatus(204); // No content, successful delete
    } else {
      res.status(404).json({ error: 'PlayGroundPicture not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

}