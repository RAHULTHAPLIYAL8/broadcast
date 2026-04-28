const router=require("express").Router();
const Content=require("../models/content.model");
const Subject=require("../models/subject.model");
const schedule=require("../models/schedule.model")
const auth=require("../middleware/auth");
const role=require("../middleware/role");
const upload = require("../middleware/upload");
const { where } = require("sequelize");
const {subject,upload,live}=require("../controllers/content.controllers")


const subject=async(req,res)=>
{
  try{
  const {subject}=req.body;
  const s=await Subject.findOne({where:{subject}});
  if(s)
  {
    res.status(400).json({message:"Subject already exist"});
  }
  else{
    const data=await Subject.create({
      subject
    })
    res.status(201).json({message:"Subject added"});
  }
}catch(err)
{
  res.status(500).json({message:err.message});
}
}


const upload=async(req,res)=>
{
    async (req, res) => {
    try {
      
      console.log("user id kya hai batan ek baar");
      console.log(req.user.id);

      const sub=await Subject.findOne({name:req.body.subject})
      console.log("subject bna kee nhi");
      console.log(sub.id);
      if(!sub)
        res.status(401).json({message:"not have this type of subject"});

      const data = await Content.create({
        title: req.body.title,
        description: req.body.description,
        subject_id: sub.id,
        file_path: req.file ? req.file.path : null,
        file_type: req.file ? req.file.mimetype : null,
        file_size: req.file ? req.file.size : null,
        uploaded_by: Number(req.user.id),
        status: "pending",
        rejection: null,
        approved_by: null,
      });

      const s=await schedule.create({
        content_id:data.id,
        slot_id:sub.id,
        rotation_order:req.body.rotation_order,
        duration:req.body.duration,
        start_time:req.body.start_time,
        end_time:req.body.end_time
      })

      return res.status(201).json({
        success: true,
        message: "Content uploaded successfully",
        data
      });

    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}

const live=async (req, res) => {
  try {
    const contents = await schedule.findAll({
      include: [{
        model: Content,
        required: true,
        where: {
          uploaded_by: req.params.teacherid,
          status: "approved"   
        }
      }],
      order: [["rotation_order", "ASC"]]
    });

    console.log("DATA 👉", contents);

    const now = new Date();

    const valid = contents.filter(
      (c) => now >= new Date(c.start_time) && now <= new Date(c.end_time)
    );

    if (!valid.length) {
      return res.json({ msg: "No content available" });
    }

    let total = valid.reduce((sum, c) => sum + c.duration * 60000, 0);
    let t = Date.now() % total;

    let cum = 0;
    for (let c of valid) {
      cum += c.duration * 60000;
      if (t < cum) return res.json(c);
    }

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
      sql: error.sql || null
    });
  }
}


module.exports={subject,module,live};