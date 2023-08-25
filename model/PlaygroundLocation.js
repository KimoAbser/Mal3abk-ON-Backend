const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance

class PlaygroundLocation extends Model { }

PlaygroundLocation.init(
  {
  // Define the model attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  govermentId: {
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
 
  playgroundId: {
    type: DataTypes.INTEGER,
  },
 
},
{
  sequelize,
  tableName: 'playgroundLocation', // Specify the exact table name in PostgreSQL
  modelName: 'playgroundLocation',
  timestamps: false

}
);

// Synchronize the model with the database
PlaygroundLocation.sync({ force: false }).then(() => {
  console.log('PlaygroundLocation model synchronized with the database.');
});

module.exports = PlaygroundLocation;
