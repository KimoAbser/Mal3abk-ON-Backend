const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance

class AddMethod extends Model { }

AddMethod.init(
  {
    // Define the model attributes
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    method: {
      type: DataTypes.STRING,
    },

  },

  {
    sequelize,
    tableName: 'addMethod', // Specify the exact table name in PostgreSQL
    modelName: 'addMethod',
    timestamps: false

  }
);

// Synchronize the model with the database
AddMethod.sync({ force: false }).then(() => {
  console.log('AddMethod model synchronized with the database.');
});

module.exports = AddMethod;
