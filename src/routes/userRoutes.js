import express from "express";
import userController from "../controller/userController";
import Validator from "../middlewares/validator";

const userRouter = express.Router();

userRouter.post(
  "/register",
  Validator.newAccountRules(),
  Validator.validateInput,
  userController.signUp
);
userRouter.post("/login",userController.userLogin);

export default userRouter
