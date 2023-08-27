const bcrypt = require('bcrypt');
const User = require('../model/User'); // Import the User model
const PlayerPosition = require('../model/PlayerPosition');
const PlayerLocation = require('../model/PlayerLocation');
const PlayerSkill = require('../model/PlayerSkill');
const UserFavoritePlayground = require('../model/UserFavoritePlayground');
const Playground = require('../model/Playground');

module.exports = {

// GET all users
getAllUsers: async (req, res) => {
  try {
    const users = await User.findAll({
      include:[
        {
         model: PlayerPosition,
        },
        {
          model:PlayerLocation,
        },
        {
          model:PlayerSkill,
        },
        {
          model:UserFavoritePlayground,
          include:Playground,
        },
      ]
    });
    console.log('Retrieved users:', users); // Add this line for logging
    res.json(users);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

//GET user by ID
getUserById: async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId,{
      include:[
        {
         model: PlayerPosition,
        },
        {
          model:PlayerLocation,
        },
        {
          model:PlayerSkill,
        },
        {
          model:UserFavoritePlayground,
          include:Playground,
        },
      ]
    });

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// POST a new user
newUser: async (req, res) => {
  try {
    const { phoneNumber, firstName, lastName, email, password, gender, age, code, numOfBookings,profilePicture } = req.body;
    
    // Attempt to create a new user record in the database
    const newUser = await User.create({
      phoneNumber,
      firstName,
      lastName,
      email,
      password,
      gender,
      age,
      code,
      numOfBookings,
      profilePicture
    });
    
    res.status(201).json(newUser);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      // Handle unique constraint violation (e.g., duplicate phone number)
      res.status(400).json({ error: 'The phone number is already existed' });
    } else {
      // Handle other errors
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
},


// PUT (update) a user by ID
updateUserById: async (req, res) => {
  const userId = req.params.id;
  const updatedUserFields = req.body;

  try {
    const user = await User.findByPk(userId);

    if (user) {
      await user.update(updatedUserFields);
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// DELETE a user by ID
deleteUserById: async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);

    if (user) {
      await user.destroy();
      res.sendStatus(204); // No content, successful delete
    } else {
      res.status(404).json({ error: 'User not found' });
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
    // Find a user with the provided email
    const user = await User.findOne({ where: { phoneNumber } });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Verify the password
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Send a success response with user data
    res.json({ message: 'Login successful', user });
  } catch (error) {
    // Handle login errors
    console.error('Login error:', error.message);
    res.status(500).json({ error: 'Login failed' });
  }
},


}
