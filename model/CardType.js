const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance

class CardType extends Model { }

CardType.init(
  {

  // Define the model attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  }

},
{
  sequelize,
  tableName: 'cardType', // Specify the exact table name in PostgreSQL
  modelName: 'cardType',
  timestamps: false

}
);
// CardType.hasMany(Card, { foreignKey: 'cardTypeId' });

module.exports = CardType;
