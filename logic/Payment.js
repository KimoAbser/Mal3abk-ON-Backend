const Payment = require('../model/Payment'); // Import the Payment model

module.exports = {

// GET all payments
getAllPayments: async (req, res) => {
  try {
    const payments = await Payment.findAll();
    console.log('Retrieved payments:', payments); // Add this line for logging
    res.json(payments);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

//GET payment by ID
getPaymentById: async (req, res) => {
  const paymentId = req.params.id;

  try {
    const payment = await Payment.findByPk(paymentId);

    if (payment) {
      res.json(payment);
    } else {
      res.status(404).json({ error: 'Payment not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// POST a new payment
newPayment: async (req, res) => {
  try {
    const { cardNumber, date, paymentMethodId, status, bookingId} = req.body;
    
    // Create a new payment record in the database
    const newPayment = await Payment.create({
      cardNumber,
      date,
      paymentMethodId,
      status,
      bookingId
    });
    
    res.status(201).json(newPayment);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},


// PUT (update) a payment by ID
updatePaymentById: async (req, res) => {
  const paymentId = req.params.id;
  const updatedPaymentFields = req.body;

  try {
    const payment = await Payment.findByPk(paymentId);

    if (payment) {
      await payment.update(updatedPaymentFields);
      res.json(payment);
    } else {
      res.status(404).json({ error: 'Payment not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// DELETE a payment by ID
deletePaymentById: async (req, res) => {
  const paymentId = req.params.id;

  try {
    const payment = await Payment.findByPk(paymentId);

    if (payment) {
      await payment.destroy();
      res.sendStatus(204); // No content, successful delete
    } else {
      res.status(404).json({ error: 'Payment not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

}