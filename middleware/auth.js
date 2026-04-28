const jwt=require("jsonWebtoken");

module.exports=(req,res,next)=>
{

    const token=req.headers.authorization?.split(" ")[1];
    console.log("Rahul Thapliyal dekhiyo token aarha hai kee nhi");
    console.log(token);
    if(!token)
    {
        res.staus(401).json({msg:"No token"});
    }
    try{
        const decoded=jwt.verify(token,"secretKey");
        req.user=decoded;
        next();
    }
    catch(err)
    {
        res.status(401).json({msg:"invalid"});
    }
}