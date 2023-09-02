const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance
const bcrypt = require('bcrypt');
const PlayerLocation = require('./PlayerLocation');
const Skill = require('./Skills');
const PlayerSkill = require('./PlayerSkill');
const PlayerPosition = require('./PlayerPosition');
// const Playground = require('./Playground');
const UserFavoritePlayground = require('./UserFavoritePlayground');
// const Booking = require('./Booking');
const JoinBooking = require('./JoinBooking');
const Playground = require('./Playground');
const Position = require('./Position');
const AddMethod = require('./AddMethod');

class User extends Model { }

User.init(
  {
  // Define the model attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  phoneNumber: {
    type: DataTypes.INTEGER,
    unique: true,
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
   
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      // Hash the password before storing it in the database
      const hashedPassword = bcrypt.hashSync(value, 10);
      this.setDataValue('password', hashedPassword);
    },
  },
  gender: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  code: {
    type: DataTypes.STRING,
  },
  numOfBookings: {
    type: DataTypes.INTEGER,
  },
  profilePicture: {
    type: DataTypes.BLOB,
  },
},
{
  sequelize,
  tableName: 'user', // Specify the exact table name in PostgreSQL
  modelName: 'user',
  timestamps: false
}
);
User.hasOne(PlayerLocation);


User.hasOne(PlayerPosition);
// Position.belongsTo(PlayerPosition);
JoinBooking.belongsTo(AddMethod);
AddMethod.hasMany(JoinBooking);
User.hasMany(JoinBooking);
JoinBooking.belongsTo(User);
User.hasMany(PlayerSkill);
Skill.hasMany(PlayerSkill);
PlayerSkill.belongsTo(User);
PlayerSkill.belongsTo(Skill);
// User.belongsToMany(Booking, { through: JoinBooking });
User.hasMany(UserFavoritePlayground);
Playground.hasMany(UserFavoritePlayground);
UserFavoritePlayground.belongsTo(User);
UserFavoritePlayground.belongsTo(Playground);
// Synchronize the model with the database
User.sync({ force: false }).then(() => {
  console.log('User model synchronized with the database.');
});

module.exports = User;
