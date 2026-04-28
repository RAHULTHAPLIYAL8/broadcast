const router=require("express").Router();
const Content=require("../models/content.model");
const Subject=require("../models/subject.model");
const auth=require("../middleware/auth");
const role=require("../middleware/role");
const upload = require("../middleware/upload");
const { where } = require("sequelize");
const {pending,approve,rejected}=require("../controllers/principle.controllers")

router.get("/pending",auth,role('principal'),pending)
// Principal approve
router.get("/approve/:id", auth, role("principal"),approve);

// Principal rejected
router.get("/rejected/:id", auth, role("principal"),rejected);

module.exports=router;