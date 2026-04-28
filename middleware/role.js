module.exports = (role) => (req, res, next) => {

  console.log("isme dekhna role kya hai")
  console.log(req.user.role)
  console.log(role)
  if (req.user.role !== role)
    return res.status(403).json({ msg: "Forbidden" });
  next();
};