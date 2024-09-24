const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance
const Payment = require('./Payment');
const CardType = require('./CardType');

class Card extends Model { }

Card.init(
  {
  // Define the model attributes
  cardNumber: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    unique: true,
  },
  holder: {
    type: DataTypes.STRING,
  },
  bankId: {
    type: DataTypes.INTEGER,
  },
  cardTypeId: {
    type: DataTypes.INTEGER,
  },
  expiryDate: {
    type: DataTypes.DATE,
  }
},
{
  sequelize,
  tableName: 'card', // Specify the exact table name in PostgreSQL
  modelName: 'card',
  timestamps: false

}
);
Card.hasMany(Payment);
Card.belongsTo(CardType, { foreignKey: 'cardTypeId', as: 'CardType' });

module.exports = Card;
