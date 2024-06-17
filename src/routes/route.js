const express = require("express");
const authController = require("../controllers/authController");
const userController= require("../controllers/userController");
const router = express.Router();
const { signupValidRequestBody } = require("../middleware/request/signup-validation");
const {loginValidRequestBody}= require("../middleware/request/login-validation");
const {checkingHeader}= require("../middleware/response/fetching-user-middleware");
const { updateUser, deleteUserValidation } = require("../middleware/response/update-user-middleware");




router.post("/users", signupValidRequestBody, authController.userSignUp);
router.post("/login",loginValidRequestBody,authController.userLogin);
router.get("/users/:userId",checkingHeader,userController.fetchOneUser);
router.put("/users/:userId",updateUser,userController.updateUser);
router.delete("/users/:userId", deleteUserValidation,userController.deleteUser);

module.exports = router;
