const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/db");
const Content = require("./content.model");
const Subject = require("./subject.model"); 

const SlotContent = sequelize.define("SlotContent", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  content_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Content,
      key: "id"
    }
  },
  slot_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Subject,
      key: "id"
    }
  },
  rotation_order: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  duration: {
    type: DataTypes.INTEGER, // minutes
    allowNull: false
  },
  start_time:
  {
    type:DataTypes.DATE,
    allowNull:false
  },
   end_time:
  {
    type:DataTypes.DATE,
    allowNull:false
  },
}, {
  timestamps: true,
  createdAt: "created_at",
  updatedAt: false
});

module.exports = SlotContent;