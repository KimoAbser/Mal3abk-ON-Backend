const PlaygroundLocation = require('../model/PlaygroundLocation'); // Import the PlaygroundLocation model

module.exports = {

  // GET all playgroundLocations
  getAllPlaygroundLocations: async (req, res) => {
    try {
      const playgroundLocations = await PlaygroundLocation.findAll();
      console.log('Retrieved playgroundLocations:', playgroundLocations); // Add this line for logging
      res.json(playgroundLocations);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  //GET playgroundLocation by ID
  getPlaygroundLocationById: async (req, res) => {
    const playgroundLocationId = req.params.id;

    try {
      const playgroundLocation = await PlaygroundLocation.findByPk(playgroundLocationId);

      if (playgroundLocation) {
        res.json(playgroundLocation);
      } else {
        res.status(404).json({ error: 'PlaygroundLocation not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // POST a new playgroundLocation
  newPlaygroundLocation: async (req, res) => {
    try {
      const { governmentId, cityId, latitude, longitude, playgroundId } = req.body;

      // Create a new playgroundLocation record in the database
      const newPlaygroundLocation = await PlaygroundLocation.create({
        governmentId,
        cityId,
        latitude,
        longitude,
        playgroundId
      });

      res.status(201).json(newPlaygroundLocation);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },


  // PUT (update) a playgroundLocation by ID
  updatePlaygroundLocationById: async (req, res) => {
    const playgroundLocationId = req.params.id;
    const updatedPlaygroundLocationFields = req.body;

    try {
      const playgroundLocation = await PlaygroundLocation.findByPk(playgroundLocationId);

      if (playgroundLocation) {
        await playgroundLocation.update(updatedPlaygroundLocationFields);
        res.json(playgroundLocation);
      } else {
        res.status(404).json({ error: 'PlaygroundLocation not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // DELETE a playgroundLocation by ID
  deletePlaygroundLocationById: async (req, res) => {
    const playgroundLocationId = req.params.id;

    try {
      const playgroundLocation = await PlaygroundLocation.findByPk(playgroundLocationId);

      if (playgroundLocation) {
        await playgroundLocation.destroy();
        res.sendStatus(204); // No content, successful delete
      } else {
        res.status(404).json({ error: 'PlaygroundLocation not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

}