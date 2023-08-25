const Bank = require('../model/Bank'); // Import the Bank model

module.exports = {

// GET all banks
getAllBanks: async (req, res) => {
  try {
    const banks = await Bank.findAll();
    console.log('Retrieved banks:', banks); // Add this line for logging
    res.json(banks);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

//GET bank by ID
getBankById: async (req, res) => {
  const bankId = req.params.id;

  try {
    const bank = await Bank.findByPk(bankId);

    if (bank) {
      res.json(bank);
    } else {
      res.status(404).json({ error: 'Bank not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// POST a new bank
newBank: async (req, res) => {
  try {
    const { name, isActive } = req.body;
    
    // Create a new bank record in the database
    const newBank = await Bank.create({
      name,
      isActive
    });
    
    res.status(201).json(newBank);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},


// PUT (update) a bank by ID
updateBankById: async (req, res) => {
  const bankId = req.params.id;
  const updatedBankFields = req.body;

  try {
    const bank = await Bank.findByPk(bankId);

    if (bank) {
      await bank.update(updatedBankFields);
      res.json(bank);
    } else {
      res.status(404).json({ error: 'Bank not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// DELETE a bank by ID
deleteBankById: async (req, res) => {
  const bankId = req.params.id;

  try {
    const bank = await Bank.findByPk(bankId);

    if (bank) {
      await bank.destroy();
      res.sendStatus(204); // No content, successful delete
    } else {
      res.status(404).json({ error: 'Bank not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

}