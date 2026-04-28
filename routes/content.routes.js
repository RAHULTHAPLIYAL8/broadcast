const router=require("express").Router();
const Content=require("../models/content.model");
const Subject=require("../models/subject.model");
const schedule=require("../models/schedule.model")
const auth=require("../middleware/auth");
const role=require("../middleware/role");
const upload = require("../middleware/upload");
const { where } = require("sequelize");
const {subject,upload,live}=require("../controllers/content.controllers")



router.post("/subject",auth,role("teacher"),subject)

router.post("/upload",auth,role("teacher"),upload.single("file"),upload);

router.get("/live/:teacherid",live);

module.exports=router;