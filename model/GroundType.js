const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance
const Playground = require('./Playground');

class GroundType extends Model { }

GroundType.init(
  {

  // Define the model attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  type: {
    type: DataTypes.STRING,
  },
 
},
{
  sequelize,
  tableName: 'groundType', // Specify the exact table name in PostgreSQL
  modelName: 'groundType',
  timestamps: false

}
);
GroundType.hasMany(Playground);


module.exports = GroundType;
