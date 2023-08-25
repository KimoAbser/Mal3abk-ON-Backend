const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance
const Playground = require('./Playground');
// const Government = require('./Governments');

class City extends Model { }

City.init(
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
  governmentId: {
    type: DataTypes.INTEGER,
  },

},
{
  sequelize,
  tableName: 'city', // Specify the exact table name in PostgreSQL
  modelName: 'city',
  timestamps: false

}
);
// City.belongsTo(Government, { foreignKey: 'governmentId' , as: 'Government' });

;
// Synchronize the model with the database
City.sync({ force: false }).then(() => {
  console.log('City model synchronized with the database.');
});

module.exports = City;
