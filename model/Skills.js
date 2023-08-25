const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance

class Skill extends Model { }

Skill.init(
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
 
},
{
  sequelize,
  tableName: 'skill', // Specify the exact table name in PostgreSQL
  modelName: 'skill',
  timestamps: false

}
);

// Synchronize the model with the database
Skill.sync({ force: false }).then(() => {
  console.log('Skill model synchronized with the database.');
});

module.exports = Skill;
