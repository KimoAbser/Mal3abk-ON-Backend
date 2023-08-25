const CardType = require('../model/CardType'); // Import the CardType model

module.exports = {

// GET all cardTypes
getAllCardTypes: async (req, res) => {
  try {
    const cardTypes = await CardType.findAll();
    console.log('Retrieved cardTypes:', cardTypes); // Add this line for logging
    res.json(cardTypes);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

//GET cardType by ID
getCardTypeById: async (req, res) => {
  const cardTypeId = req.params.id;

  try {
    const cardType = await CardType.findByPk(cardTypeId);

    if (cardType) {
      res.json(cardType);
    } else {
      res.status(404).json({ error: 'CardType not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// POST a new cardType
newCardType: async (req, res) => {
  try {
    const {name} = req.body;
    
    // Create a new cardType record in the database
    const newCardType = await CardType.create({
      name
    });
    
    res.status(201).json(newCardType);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},


// PUT (update) a cardType by ID
updateCardTypeById: async (req, res) => {
  const cardTypeId = req.params.id;
  const updatedCardTypeFields = req.body;

  try {
    const cardType = await CardType.findByPk(cardTypeId);

    if (cardType) {
      await cardType.update(updatedCardTypeFields);
      res.json(cardType);
    } else {
      res.status(404).json({ error: 'CardType not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// DELETE a cardType by ID
deleteCardTypeById: async (req, res) => {
  const cardTypeId = req.params.id;

  try {
    const cardType = await CardType.findByPk(cardTypeId);

    if (cardType) {
      await cardType.destroy();
      res.sendStatus(204); // No content, successful delete
    } else {
      res.status(404).json({ error: 'CardType not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

}