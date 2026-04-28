const {DataTypes}=require("sequelize");
const {sequelize}=require("../config/db.js");
const User=require("./user.model")
const Subject=require("./subject.model")

const Content=sequelize.define("Content",{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    title:DataTypes.STRING,
    description:DataTypes.STRING,
    subject_id:{type:DataTypes.INTEGER,allowNull:false,references:{model:Subject,key:"id"}},
    file_path:DataTypes.STRING,
    file_type:DataTypes.STRING,
    file_size:DataTypes.STRING,
    uploaded_by:{type:DataTypes.INTEGER,allowNull:false,references:{model:User,key:"id"}},
    status:{type:DataTypes.ENUM("pending","approved","rejected"),defaultValue:"pending"},
    rejection_reason:DataTypes.STRING,
    approved_by:{type:DataTypes.INTEGER,allowNull:true,references:{model:User,key:"id"}}
})

module.exports=Content;