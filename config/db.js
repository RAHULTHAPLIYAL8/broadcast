const {Sequelize, Model} = require("sequelize");

//create sequelize instance
const sequelize=new Sequelize("testdb","root","rahul",{host:"localhost",dialect:"mysql"});

const connectDB=async()=>
{
    try
    {
        await sequelize.authenticate();
        console.log("Database Connected")
    }
    catch(err)
    {
        console.log("Error to connect with database",err.message);
    }
}

module.exports={sequelize,connectDB};