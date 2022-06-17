import express from "express";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./src/routes/userRoutes";

dotenv.config("./.env");

const app = express();

app.use(bodyparser.json());
app.use("/user", userRouter);

app.use("/", (req, res) =>
  res.status(200).json({
    message: "This is API",
  })
);
const dburl = process.env.DATABASEURL;

mongoose
  .connect(dburl, {})
  .then(() => console.log("database connected successfully"));
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
export default app;
