const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance
const Booking = require('./Booking');

class CancellationReason extends Model { }

CancellationReason.init(
  {

 // Define the model attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  reason: {
    type: DataTypes.STRING,
  }
},
{
  sequelize,
  tableName: 'cancellationReason', // Specify the exact table name in PostgreSQL
  modelName: 'cancellationReason',
  timestamps: false

}
);
CancellationReason.hasMany(Booking);
// Synchronize the model with the database
CancellationReason.sync({ force: false }).then(() => {
  console.log('CancellationReason model synchronized with the database.');
});

module.exports = CancellationReason;
