const Owner = require('../model/Owner'); // Import the Owner model
const bcrypt = require('bcrypt');

module.exports = {

  // GET all owners
  getAllOwners: async (req, res) => {
    try {
      const owners = await Owner.findAll();
      console.log('Retrieved owners:', owners); // Add this line for logging
      res.json(owners);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  //GET owner by ID
  getOwnerById: async (req, res) => {
    const ownerId = req.params.id;

    try {
      const owner = await Owner.findByPk(ownerId);

      if (owner) {
        res.json(owner);
      } else {
        res.status(404).json({ error: 'Owner not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // POST a new owner
  newOwner: async (req, res) => {
    try {
      const { ssn, userName, phoneNumber, password } = req.body;

      // Create a new owner record in the database
      const newOwner = await Owner.create({
        ssn,
        userName,
        phoneNumber,
        password
      });

      res.status(201).json(newOwner);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },


  // PUT (update) a owner by ID
  updateOwnerById: async (req, res) => {
    const ownerId = req.params.id;
    const updatedOwnerFields = req.body;

    try {
      const owner = await Owner.findByPk(ownerId);

      if (owner) {
        await owner.update(updatedOwnerFields);
        res.json(owner);
      } else {
        res.status(404).json({ error: 'Owner not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // DELETE a owner by ID
  deleteOwnerById: async (req, res) => {
    const ownerId = req.params.id;

    try {
      const owner = await Owner.findByPk(ownerId);

      if (owner) {
        await owner.destroy();
        res.sendStatus(204); // No content, successful delete
      } else {
        res.status(404).json({ error: 'Owner not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  login: async (req, res) => {
    // Extract login credentials from the request body
    const { phoneNumber, password } = req.body;
    try {
      // Find a owner with the provided email
      const owner = await Owner.findOne({ where: { phoneNumber } });
  
      if (!owner) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
  
      // Verify the password
      const valid = await bcrypt.compare(password, owner.password);
      if (!valid) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
  
      // Send a success response with user data
      res.json({ message: 'Login successful', owner });
    } catch (error) {
      // Handle login errors
      console.error('Login error:', error.message);
      res.status(500).json({ error: 'Login failed' });
    }
  },


}