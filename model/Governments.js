const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance
// const City = require('./City');
const Playground = require('./Playground');
const City = require('./City');
const PlaygroundLocation = require('./PlaygroundLocation');
// const City = require('./City');

class Government extends Model { }

Government.init(
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
  tableName: 'government', // Specify the exact table name in PostgreSQL
  modelName: 'government',
  timestamps: false

}
);
Government.hasMany(City);
Government.belongsToMany(Playground,{through:PlaygroundLocation});


module.exports = Government;
