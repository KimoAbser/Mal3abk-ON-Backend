const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance

class PlayerSkill extends Model { }

PlayerSkill.init(
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
  skillId: {
    type: DataTypes.INTEGER,
  },
  value: {
    type: DataTypes.INTEGER,
  }
},
{
  sequelize,
  tableName: 'playerSkill', // Specify the exact table name in PostgreSQL
  modelName: 'playerSkill',
  timestamps: false

}
);

module.exports = PlayerSkill;
