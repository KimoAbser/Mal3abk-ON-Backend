const City = require('../model/City'); // Import the City model

module.exports = {

// GET all citys
getAllCitys: async (req, res) => {
  try {
    const citys = await City.findAll();
    console.log('Retrieved citys:', citys); // Add this line for logging
    res.json(citys);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

//GET city by ID
getCityById: async (req, res) => {
  const cityId = req.params.id;

  try {
    const city = await City.findByPk(cityId);

    if (city) {
      res.json(city);
    } else {
      res.status(404).json({ error: 'City not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// POST a new city
newCity: async (req, res) => {
  try {
    const { name, governmentId} = req.body;
    
    // Create a new city record in the database
    const newCity = await City.create({
      name,
      governmentId
    });
    
    res.status(201).json(newCity);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},


// PUT (update) a city by ID
updateCityById: async (req, res) => {
  const cityId = req.params.id;
  const updatedCityFields = req.body;

  try {
    const city = await City.findByPk(cityId);

    if (city) {
      await city.update(updatedCityFields);
      res.json(city);
    } else {
      res.status(404).json({ error: 'City not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// DELETE a city by ID
deleteCityById: async (req, res) => {
  const cityId = req.params.id;

  try {
    const city = await City.findByPk(cityId);

    if (city) {
      await city.destroy();
      res.sendStatus(204); // No content, successful delete
    } else {
      res.status(404).json({ error: 'City not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

}