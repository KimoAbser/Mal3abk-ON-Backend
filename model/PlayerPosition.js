const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance

class PlayerPosition extends Model { }

PlayerPosition.init(
  {
  // Define the model attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
 
  primaryPositionId: {
    type: DataTypes.INTEGER,
  },
 
  secondaryPositionId: {
    type: DataTypes.INTEGER,
  },
 
},
{
  sequelize,
  tableName: 'playerPosition', // Specify the exact table name in PostgreSQL
  modelName: 'playerPosition',
  timestamps: false

}
);


module.exports = PlayerPosition;
