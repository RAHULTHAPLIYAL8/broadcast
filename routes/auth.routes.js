const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const router=require("express").Router();
const saltRounds = 10;
const JWT_SECRET = "secretKey"; 
const {login,register}=require("../controllers/auth.controllers")


router.post("/register",);


router.post("/login", );

module.exports=router;