const UserFavoritePlayground = require('../model/UserFavoritePlayground'); // Import the UserFavoritePlayground model
const Playground = require('./Playground');

module.exports = {

// GET all userFavoritePlaygrounds
getAllUserFavoritePlaygrounds: async (req, res) => {
  const userId = req.params.userId
  // try {
  //   const userFavoritePlaygrounds = await UserFavoritePlayground.findAll(
  //     {
  //       where :{userId:userId},
  //       include:Playground,
  //     }
  //   ).then((userFavoritePlaygrounds)=>{
  //     if(!userFavoritePlaygrounds){
  //       res.status(500).json({ error: 'No Favorite Playgrounds!' });
  //     }
  //     else{
  //       userFavoritePlaygrounds.Playgrounds.forEach((playground) => {
  //         console.log('Retrieved User Favorite Playgrounds:', playground); // Add this line for logging
  //         res.status(200).json(playground);
  //       });
  //     }
  //   })
  //   // .catch((error)=>res.)
  //   // res.json(userFavoritePlaygrounds);


  try {
    const userFavoritePlaygrounds = await UserFavoritePlayground.findAll({
      where: { userId: userId },
      include: Playground, // Assuming Playground is the associated model
    });

    if (!userFavoritePlaygrounds || userFavoritePlaygrounds.length === 0) {
      // If no favorite playgrounds found for the user
      return res.status(404).json({ error: 'No Favorite Playgrounds!' });
    }

    // Extract all attributes of the playgrounds
    const favoritePlaygrounds = userFavoritePlaygrounds.map((favorite) => {
      return favorite.Playground.get({ plain: true }); // Get all attributes as a plain object
    });

    res.status(200).json(favoritePlaygrounds);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

//GET userFavoritePlayground by ID
getUserFavoritePlaygroundById: async (req, res) => {
  const userFavoritePlaygroundId = req.params.id;

  try {
    const userFavoritePlayground = await UserFavoritePlayground.findByPk(userFavoritePlaygroundId);

    if (userFavoritePlayground) {
      res.json(userFavoritePlayground);
    } else {
      res.status(404).json({ error: 'UserFavoritePlayground not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// POST a new userFavoritePlayground
newUserFavoritePlayground: async (req, res) => {
  try {
    const { userId, playgroundId} = req.body;
    
    // Create a new userFavoritePlayground record in the database
    const newUserFavoritePlayground = await UserFavoritePlayground.create({
      userId,
      playgroundId
    });
    
    res.status(201).json(newUserFavoritePlayground);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},


// PUT (update) a userFavoritePlayground by ID
updateUserFavoritePlaygroundById: async (req, res) => {
  const userFavoritePlaygroundId = req.params.id;
  const updatedUserFavoritePlaygroundFields = req.body;

  try {
    const userFavoritePlayground = await UserFavoritePlayground.findByPk(userFavoritePlaygroundId);

    if (userFavoritePlayground) {
      await userFavoritePlayground.update(updatedUserFavoritePlaygroundFields);
      res.json(userFavoritePlayground);
    } else {
      res.status(404).json({ error: 'UserFavoritePlayground not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// DELETE a userFavoritePlayground by ID
deleteUserFavoritePlaygroundById: async (req, res) => {
  const userFavoritePlaygroundId = req.params.id;

  try {
    const userFavoritePlayground = await UserFavoritePlayground.findByPk(userFavoritePlaygroundId);

    if (userFavoritePlayground) {
      await userFavoritePlayground.destroy();
      res.sendStatus(204); // No content, successful delete
    } else {
      res.status(404).json({ error: 'UserFavoritePlayground not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

}