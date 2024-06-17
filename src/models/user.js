const mongoose = require("mongoose"); // here we are import the mongoose package so basically mongoose is a package which help to create connection between mongodb and express

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    emailId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    age: {
      type: Number,
      required: true,
      min: 0
    },
  },
  { timestamps: true }
);
const User = mongoose.model("user", userSchema);

module.exports = User;
