const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance
const Playground = require('./Playground');

class BallType extends Model { }

BallType.init(
  {
    // Define the model attributes
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    tableName: 'ballType', // Specify the exact table name in PostgreSQL
    modelName: 'ballType',
    timestamps: false

  }
);
BallType.hasMany(Playground);



module.exports = BallType;
