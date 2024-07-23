const { userverify } = require("../../Controller/user/userContoller");
const userDb = require("../../Model/user/userModel");
const USER_SECRET="sdasd"
const jwt = require("jsonwebtoken");

const userauthenticate = async(req,res,next)=>{

  const token = req.headers.authorization;

  // console.log(token);

  try {
    
    const validuser = jwt.verify(token,USER_SECRET);

    const rootUser = await userDb.findOne({_id:validuser._id})

      if(!rootUser){throw new Error("user not found")}

      req.token = token
      req.rootUser = rootUser
      req.userId = rootUser._id

      next()

  } catch (error) {
    console.log(error);
  }

}

module.exports = userauthenticate