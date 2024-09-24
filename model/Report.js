const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance

class Report extends Model { }

Report.init(
  {

  // Define the model attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  state: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATE,
  }
},
{
  sequelize,
  tableName: 'report', // Specify the exact table name in PostgreSQL
  modelName: 'report',
  timestamps: false

}
);


module.exports = Report;
