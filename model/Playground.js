const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance
// const Booking = require('./Booking');
// const UserFavoritePlayground = require('./UserFavoritePlayground');
// const PlaygroundPicture = require('./PlaygroundPicture');
// const User = require('./User');
// const PlaygroundLocation = require('./PlaygroundLocation');

class Playground extends Model { }

Playground.init(
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

  area: {
    type: DataTypes.DOUBLE,
  },
  capacity: {
    type: DataTypes.INTEGER,
  },
  groundTypeId: {
    type: DataTypes.INTEGER,
  },
  ballTypeId: {
    type: DataTypes.INTEGER,
  },
  dressingroom: {
    type: DataTypes.BOOLEAN,
  },
  showerroom: {
    type: DataTypes.BOOLEAN,
  },
  bathroom: {
    type: DataTypes.BOOLEAN,
  },
  playersWaitingArea: {
    type: DataTypes.BOOLEAN,
  },
  parking: {
    type: DataTypes.BOOLEAN,
  },
  dayHourCost: {
    type: DataTypes.INTEGER,
  },
  nightHourCost: {
    type: DataTypes.INTEGER,
  },
  rate: {
    type: DataTypes.DOUBLE,
  },
  openingTime: {
    type: DataTypes.TIME,
  },
  closingTime: {
    type: DataTypes.TIME,
  },
  video: {
    type: DataTypes.BLOB,
  },
  ownerId: {
    type: DataTypes.INTEGER,
  },
},
{
  sequelize,
  tableName: 'playground', // Specify the exact table name in PostgreSQL
  modelName: 'playground',
  timestamps: false

}
);
// Playground.hasMany(Booking);
// Playground.belongsToMany(User,{through:UserFavoritePlayground});
// Playground.hasOne(PlaygroundLocation);
// Playground.hasMany(PlaygroundPicture);
// Synchronize the model with the database
Playground.sync({ force: false }).then(() => {
  console.log('PlayGround model synchronized with the database.');
});

module.exports = Playground;
