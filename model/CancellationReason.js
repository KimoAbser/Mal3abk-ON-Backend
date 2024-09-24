const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance


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
const Booking = require('./Booking');
CancellationReason.hasMany(Booking);


module.exports = CancellationReason;
