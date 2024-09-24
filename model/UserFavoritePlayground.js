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

module.exports = UserFavoritePlayground;
