const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance
// const User = require('./User');
// const User = require('./User');

class JoinBooking extends Model { }

JoinBooking.init(
  {

  // Define the model attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  bookingId: {
    type: DataTypes.INTEGER,
  },
  addMethodId: {
    type: DataTypes.INTEGER,
  }
},
{
  sequelize,
  tableName: 'joinBooking', // Specify the exact table name in PostgreSQL
  modelName: 'joinBooking',
  timestamps: false

}
);
// JoinBooking.hasMany(User);
// JoinBooking.belongsToMany(User,{through: 'Booking'});
// Synchronize the model with the database

module.exports = JoinBooking;
