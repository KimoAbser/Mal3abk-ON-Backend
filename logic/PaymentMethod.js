const PaymentMethod = require('../model/PaymentMethod'); // Import the PaymentMethod model

module.exports = {

// GET all paymentMethods
getAllPaymentMethods: async (req, res) => {
  try {
    const paymentMethods = await PaymentMethod.findAll();
    console.log('Retrieved paymentMethods:', paymentMethods); // Add this line for logging
    res.json(paymentMethods);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

//GET paymentMethod by ID
getPaymentMethodById: async (req, res) => {
  const paymentMethodId = req.params.id;

  try {
    const paymentMethod = await PaymentMethod.findByPk(paymentMethodId);

    if (paymentMethod) {
      res.json(paymentMethod);
    } else {
      res.status(404).json({ error: 'PaymentMethod not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// POST a new paymentMethod
newPaymentMethod: async (req, res) => {
  try {
    const { name } = req.body;
    
    // Create a new paymentMethod record in the database
    const newPaymentMethod = await PaymentMethod.create({
     name
    });
    
    res.status(201).json(newPaymentMethod);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},


// PUT (update) a paymentMethod by ID
updatePaymentMethodById: async (req, res) => {
  const paymentMethodId = req.params.id;
  const updatedPaymentMethodFields = req.body;

  try {
    const paymentMethod = await PaymentMethod.findByPk(paymentMethodId);

    if (paymentMethod) {
      await paymentMethod.update(updatedPaymentMethodFields);
      res.json(paymentMethod);
    } else {
      res.status(404).json({ error: 'PaymentMethod not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// DELETE a paymentMethod by ID
deletePaymentMethodById: async (req, res) => {
  const paymentMethodId = req.params.id;

  try {
    const paymentMethod = await PaymentMethod.findByPk(paymentMethodId);

    if (paymentMethod) {
      await paymentMethod.destroy();
      res.sendStatus(204); // No content, successful delete
    } else {
      res.status(404).json({ error: 'PaymentMethod not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

}