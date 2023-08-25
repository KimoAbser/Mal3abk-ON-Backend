const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance

class Payment extends Model { }

Payment.init(
  {

  // Define the model attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cardNumber: {
    type: DataTypes.INTEGER,
  },
  date: {
    type: DataTypes.DATE,
  },
  paymentMethodId: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.STRING,
  },
  bookingId: {
    type: DataTypes.INTEGER,
  }
},
{
  sequelize,
  tableName: 'payment', // Specify the exact table name in PostgreSQL
  modelName: 'payment',
  timestamps: false

}
);

// Synchronize the model with the database
Payment.sync({ force: false }).then(() => {
  console.log('Payment model synchronized with the database.');
});

module.exports = Payment;
