const CancellationReason = require('../model/CancellationReason'); // Import the CancellationReason model

module.exports = {

  // GET all cancellationReasons
  getAllCancellationReasons: async (req, res) => {
    try {
      const cancellationReasons = await CancellationReason.findAll();
      console.log('Retrieved cancellationReasons:', cancellationReasons); // Add this line for logging
      res.json(cancellationReasons);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  //GET cancellationReason by ID
  getCancellationReasonById: async (req, res) => {
    const cancellationReasonId = req.params.id;

    try {
      const cancellationReason = await CancellationReason.findByPk(cancellationReasonId);

      if (cancellationReason) {
        res.json(cancellationReason);
      } else {
        res.status(404).json({ error: 'CancellationReason not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // POST a new cancellationReason
  newCancellationReason: async (req, res) => {
    try {
      const { reason } = req.body;

      // Create a new cancellationReason record in the database
      const newCancellationReason = await CancellationReason.create({
        reason
      });

      res.status(201).json(newCancellationReason);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },


  // PUT (update) a cancellationReason by ID
  updateCancellationReasonById: async (req, res) => {
    const cancellationReasonId = req.params.id;
    const updatedCancellationReasonFields = req.body;

    try {
      const cancellationReason = await CancellationReason.findByPk(cancellationReasonId);

      if (cancellationReason) {
        await cancellationReason.update(updatedCancellationReasonFields);
        res.json(cancellationReason);
      } else {
        res.status(404).json({ error: 'CancellationReason not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // DELETE a cancellationReason by ID
  deleteCancellationReasonById: async (req, res) => {
    const cancellationReasonId = req.params.id;

    try {
      const cancellationReason = await CancellationReason.findByPk(cancellationReasonId);

      if (cancellationReason) {
        await cancellationReason.destroy();
        res.sendStatus(204); // No content, successful delete
      } else {
        res.status(404).json({ error: 'CancellationReason not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

}