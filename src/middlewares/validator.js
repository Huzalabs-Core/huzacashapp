import { check, validationResult } from "express-validator";

import userInfos from "../models/user";
class Validator {
  static validateInput = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.errors.map((err) => err.msg);
      return res.status(400).json({ message: errorMessage });
    }
    return next();
  };
  static newAccountRules() {
    return [
      check("Email", "email is valid")
        .trim()
        .isEmail()
        .custom((value) => {
          return userInfos.find({ Email: value }).then((user) => {
            if (user && user.length > 0) {
              return Promise.reject("Email has already been used");
            }
          });
        }),
      check("UserName", "UserName should be valid").trim().isAlpha(),
      check("Password", "password is not strong").trim().isStrongPassword(),
      check("Confirm_password")
        .trim()
        .custom((value, { req }) => {
          if (value != req.body.Password) {
            return Promise.reject("password mismatch!");
          }
          return true;
        }),
      check("Gender", "gender should be valid among male,female,other,not-say")
        .trim()
        .isIn(["male", "female", "other", "not-say"]),
    ];
  }
}
export default Validator;
