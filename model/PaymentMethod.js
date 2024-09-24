const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance
const Payment = require('./Payment');

class PaymentMethod extends Model { }

PaymentMethod.init(
  {

  // Define the model attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },

},
{
  sequelize,
  tableName: 'paymentMethod', // Specify the exact table name in PostgreSQL
  modelName: 'paymentMethod',
  timestamps: false

}
);
PaymentMethod.hasMany(Payment);


module.exports = PaymentMethod;
