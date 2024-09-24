const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance

class PlaygroundPicture extends Model { }

PlaygroundPicture.init(
  {
  // Define the model attributes
  playgroundId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  picture: {
    type: DataTypes.BLOB,
  }
},
{
  sequelize,
  tableName: 'playgroundPicture', // Specify the exact table name in PostgreSQL
  modelName: 'playgroundPicture',
  timestamps: false

}
);


module.exports = PlaygroundPicture;
