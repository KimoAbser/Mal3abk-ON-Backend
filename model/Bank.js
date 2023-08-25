const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance
const Card = require('./Card');

class Bank extends Model { }

Bank.init(
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
  isActive: {
    type: DataTypes.BOOLEAN,
  }
},
{
  sequelize,
  tableName: 'bank', // Specify the exact table name in PostgreSQL
  modelName: 'bank',
  timestamps: false

}
);
Bank.hasMany(Card);

// Synchronize the model with the database
Bank.sync({ force: false }).then(() => {
  console.log('Bank model synchronized with the database.');
});

module.exports = Bank;
