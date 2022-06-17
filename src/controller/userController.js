import hash  from "bcrypt";

import TokenAuth from "../helpers/tokenAuth";
import userInfos from "../models/user";
const bcrypt = require("bcrypt");

class userController {
  static async signUp(req, res) {
    const hashPassword = bcrypt.hashSync(
      req.body.Password && req.body.Confirm_password,
      10
    );
    req.body.Password = hashPassword;
    req.body.Confirm_password = hashPassword;
    const user = await userInfos.create(req.body);
    if (!user) {
      return res.status(404).json({ error: "user not registered" });
    }
    return res
      .status(200)
      .json({ message: "user created successfully", data: user });
  } 
  static userLogin = async (req,res)=> {
    const user=await userInfos.findOne({
      email:req.body.email
    });
    
    if(!user){
      return res.status(404).json({
        error:"user not found! kindly register first"
      })
    }
    ;if(bcrypt.compare(req.body.Password, user.Password)){
        user.password=null
        const token=TokenAuth.TokenGenerator({user:user});
        return res.status(200).json({message:"successfully logged in",token:token
      });
      }

      return res.status(404).json({
        error:"Password incorrect!"
      })
    }
    
  
}

export default userController;
