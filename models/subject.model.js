const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Subject = sequelize.define("Subject", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  createdAt: "created_at"
});

module.exports = Subject;