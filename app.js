const express=require("express");
const app=express();
const cors=require("cors");
const {sequelize,connectDB} = require("./config/db.js");

const authRouter=require("./routes/auth.routes.js");
const contentRouter=require("./routes/content.routes.js");
const principal=require("./routes/principle.routes.js");

//Integrate path for automation make table in mysql if not exist
const user=require("./models/user.model");
const Subject=require("./models/subject.model");
const Content=require("./models/content.model.js");
const schedule=require("./models/schedule.model.js");
require("./models/index.model.js")



app.use(cors());
app.use(express.json());


app.use("/api",authRouter);
app.use("/api",contentRouter);
app.use("/api",principal);


connectDB()
  .then(() => sequelize.sync())
  .then(() => {
      app.listen(5000, () => {
          console.log("Server running on port 5000 🚀");
      });
  })
  .catch(err => {
      console.log("Startup Error:", err);
  });




