const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance

class PlayerLocation extends Model { }

PlayerLocation.init(
  {
  // Define the model attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  governmentId: {
    type: DataTypes.INTEGER,
  },
 
  cityId: {
    type: DataTypes.INTEGER,
  },
 
  latitude: {
    type: DataTypes.DOUBLE,
  },
 
  longitude: {
    type: DataTypes.DOUBLE,
  },
 
  userId: {
    type: DataTypes.INTEGER,
  },
 
},
{
  sequelize,
  tableName: 'playerLocation', // Specify the exact table name in PostgreSQL
  modelName: 'playerLocation',
  timestamps: false

}
);


module.exports = PlayerLocation;
