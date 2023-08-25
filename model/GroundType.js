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
// Synchronize the model with the database
GroundType.sync({ force: false }).then(() => {
  console.log('GroundType model synchronized with the database.');
});

module.exports = GroundType;
