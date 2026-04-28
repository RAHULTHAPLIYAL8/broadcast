const { Model } = require("sequelize");
const router=require("express").Router();
const Content=require("../models/content.model");
const Subject=require("../models/subject.model");
const auth=require("../middleware/auth");
const role=require("../middleware/role");
const upload = require("../middleware/upload");
const { where } = require("sequelize");
const {pending,approve,rejected}=require("../controllers/principle.controllers")

const pending=async(req,res)=>
{
   try
     {
     const data=await Content.findAll({where:{status:"pending"}});;
     
     res.status(201).json({msg:"All contend list",data:data})
     }catch(err)
     {
     res.status(500).json({msg:err.message});
     }
}

const approve=async(req,res)=>
{
     await Content.update(
        { status: "approved" },
        { where: { id: req.params.id } }
      );
      res.json({ msg: "Approved" });
}

const rejected=async(req,res)=>
{
 await Content.update(
    { status: "rejected" },
    { where: { id: req.params.id } }
  );
  res.json({ msg: "rejected" });
}

module.exports={pending,approve,rejected};