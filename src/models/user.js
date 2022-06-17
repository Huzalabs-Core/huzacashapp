import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    UserName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Gender: {
      type: String,
      enum: ["male", "female", "other", "not-say"],
    },
    Password: {
      type: String,
      required: true,
    },
    Confirm_password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const user = mongoose.model("User", userSchema);
export default user;
