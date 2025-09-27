import  jwt  from "jsonwebtoken";
import User from "../models/UserModel";

export const authProtect = async (req,res,next)=>{
//  get token from request header

if(!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')){
    return res.status(401).json({message:"UnAuthorized, no token! "});
   
}  try{
const tokenArr = req.headers.authorization.split(' '); //[Bearer,token]
const token = tokenArr[1];
//decode the token
// token info about the user

const decodedToken  = jwt.verify(token,process.env.JWT_SECRET);

// fetch user info from userID stored in token
req.user =  await User.findById(decodedToken.user.id);
next();


    }catch(err){
          return res.status(401).json({message:"UnAuthorized, invalid token! "});
    }
}