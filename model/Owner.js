const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance
const bcrypt = require('bcrypt');
const Playground = require('./Playground');

class Owner extends Model { }

Owner.init(
  {


  // Define the model attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ssn: {
    type: DataTypes.BIGINT,
  },
  userName: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.INTEGER,
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
},
{
  sequelize,
  tableName: 'owner', // Specify the exact table name in PostgreSQL
  modelName: 'owner',
  timestamps: false

}
);
Owner.hasOne(Playground);
// Synchronize the model with the database
Owner.sync({ force: false }).then(() => {
  console.log('Owner model synchronized with the database.');
});

module.exports = Owner;
