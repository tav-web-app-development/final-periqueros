const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Event = require('./Event');

const Registration = sequelize.define('Registration', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  },
  eventId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Event,
      key: 'id',
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  },
});

// Definir relaciones
User.hasMany(Registration, { foreignKey: 'userId' });
Event.hasMany(Registration, { foreignKey: 'eventId' });
Registration.belongsTo(User, { foreignKey: 'userId' });
Registration.belongsTo(Event, { foreignKey: 'eventId' });

module.exports = Registration;
