const Content = require("./content.model");
const Schedule = require("./schedule.model");


Schedule.belongsTo(Content, { foreignKey: "content_id" });
Content.hasMany(Schedule, { foreignKey: "content_id" });
