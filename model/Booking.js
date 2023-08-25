const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance
// const AddMethod = require('./AddMethod');
// const JoinBooking = require('./JoinBooking');
const User = require('./User');
const JoinBooking = require('./JoinBooking');

class Booking extends Model { }

Booking.init(
  {



  // Define the model attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  bookingDate: {
    type: DataTypes.DATE,
    time:true,

  },
  startDate: {
    type: DataTypes.DATE,
    time:true,

  },
  period: {
    type: DataTypes.INTEGER,
  },
  endDate: {
    type: DataTypes.DATE,
    time:true,
  },
  status: {
    type: DataTypes.STRING,
  },
  bookingCode: {
    type: DataTypes.STRING,
  },
  notes: {
    type: DataTypes.STRING,
  },
  playgroundId: {
    type: DataTypes.INTEGER,
  },
  createdBy: {
    type: DataTypes.INTEGER,
  },
  cancellationReasonId: {
    type: DataTypes.INTEGER,
  },
  cost: {
    type: DataTypes.INTEGER,
  },
},
{
  sequelize,
  tableName: 'booking', // Specify the exact table name in PostgreSQL
  modelName: 'booking',
  timestamps: false
}
);

// Booking.belongsToMany(AddMethod, {through: JoinBooking});
Booking.hasMany(JoinBooking);

// JoinBooking.js
JoinBooking.belongsTo(Booking);
JoinBooking.belongsTo(User);

// User.js
User.hasMany(JoinBooking);
// Booking.hasMany(User);

// Synchronize the model with the database
Booking.sync({ force: false }).then(() => {
  console.log('Booking model synchronized with the database.');
});

module.exports = Booking;
