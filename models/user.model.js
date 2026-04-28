
const {DataTypes}=require("sequelize");
const {sequelize}=require("../config/db.js");

const User = sequelize.define("User", {
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  name: {type: DataTypes.STRING, alowNull:false },
  email: { type: DataTypes.STRING, unique: true ,alowNull: false},
  password: {type: DataTypes.STRING, alowNull: false },
  role: {type: DataTypes.ENUM("principal","teacher"),defaultValue:"teacher",alowNull:false },
}, {
  timestamps: true,
  createdAt: 'created_at',
});

module.exports=User;