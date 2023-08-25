const AddMethod = require('../model/AddMethod'); // Import the AddMethod model

module.exports = {

  // GET all AddMethods
  getAllAddingMethods: async (req, res) => {
    try {
      const addMethod = await AddMethod.findAll();
      console.log('Retrieved AddMethods:', addMethod); // Add this line for logging
      res.json(addMethod);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  //GET AddMethods by ID
  getAddingMethodById: async (req, res) => {
    const addMethodId = req.params.id;

    try {
      const addMethod = await AddMethod.findByPk(addMethodId);

      if (addMethod) {
        res.json(addMethod);
      } else {
        res.status(404).json({ error: 'AddMethod not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // POST a new AddMethods
  newAddingMethod: async (req, res) => {
    try {
      const {method} = req.body;

      // Create a new AddMethods record in the database
      const newAddMethod = await AddMethod.create({
        method
      });

      res.status(201).json(newAddMethod);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },


  // PUT (update) a AddMethods by ID
  updateAddingMethodById: async (req, res) => {
    const addMethodId = req.params.id;
    const updatedAddMethodFields = req.body;

    try {
      const addMethod = await AddMethod.findByPk(addMethodId);

      if (addMethod) {
        await addMethod.update(updatedAddMethodFields);
        res.json(addMethod);
      } else {
        res.status(404).json({ error: 'AddMethod not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // DELETE a AddMethods by ID
  deleteAddingMethodById: async (req, res) => {
    const addMethodId = req.params.id;

    try {
      const addMethod = await AddMethod.findByPk(addMethodId);

      if (addMethod) {
        await addMethod.destroy();
        res.sendStatus(204); // No content, successful delete
      } else {
        res.status(404).json({ error: 'AddMethod not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

}