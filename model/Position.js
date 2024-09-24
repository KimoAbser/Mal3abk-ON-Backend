const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance

class Position extends Model { }

Position.init(
  {
  // Define the model attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  position: {
    type: DataTypes.STRING,
  },
 
},
{
  sequelize,
  tableName: 'position', // Specify the exact table name in PostgreSQL
  modelName: 'position',
  timestamps: false

}
);



module.exports = Position;
