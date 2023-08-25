const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance
// const Playground = require('./Playground');

class UserFavoritePlayground extends Model { }

UserFavoritePlayground.init(
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
  playgroundId: {
    type: DataTypes.INTEGER,
  },

},
{
  sequelize,
  tableName: 'userFavoritePlayground', // Specify the exact table name in PostgreSQL
  modelName: 'userFavoritePlayground',
  timestamps: false

}
);
// UserFavoritePlayground.hasMany(Playground);
// Synchronize the model with the database
UserFavoritePlayground.sync({ force: false }).then(() => {
  console.log('UserFavoritePlayground model synchronized with the database.');
});

module.exports = UserFavoritePlayground;
