const PlayerLocation = require('../model/PlayerLocation'); // Import the PlayerLocation model

module.exports = {

  // GET all playerLocations
  getAllPlayerLocations: async (req, res) => {
    try {
      const playerLocations = await PlayerLocation.findAll();
      console.log('Retrieved playerLocations:', playerLocations); // Add this line for logging
      res.json(playerLocations);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  //GET playerLocation by ID
  getPlayerLocationById: async (req, res) => {
    const playerLocationId = req.params.id;

    try {
      const playerLocation = await PlayerLocation.findByPk(playerLocationId);

      if (playerLocation) {
        res.json(playerLocation);
      } else {
        res.status(404).json({ error: 'PlayerLocation not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // POST a new playerLocation
  newPlayerLocation: async (req, res) => {
    try {
      const { governmentId, cityId, latitude, longitude, userId } = req.body;

      // Create a new playerLocation record in the database
      const newPlayerLocation = await PlayerLocation.create({
        governmentId,
        cityId,
        latitude,
        longitude,
        userId
      });

      res.status(201).json(newPlayerLocation);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },


  // PUT (update) a playerLocation by ID
  updatePlayerLocationById: async (req, res) => {
    const playerLocationId = req.params.id;
    const updatedPlayerLocationFields = req.body;

    try {
      const playerLocation = await PlayerLocation.findByPk(playerLocationId);

      if (playerLocation) {
        await playerLocation.update(updatedPlayerLocationFields);
        res.json(playerLocation);
      } else {
        res.status(404).json({ error: 'PlayerLocation not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // DELETE a playerLocation by ID
  deletePlayerLocationById: async (req, res) => {
    const playerLocationId = req.params.id;

    try {
      const playerLocation = await PlayerLocation.findByPk(playerLocationId);

      if (playerLocation) {
        await playerLocation.destroy();
        res.sendStatus(204); // No content, successful delete
      } else {
        res.status(404).json({ error: 'PlayerLocation not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

}