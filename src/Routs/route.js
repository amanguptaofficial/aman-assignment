const express= require("express");
const userController= require("../controller/UserController")
const productController= require("../controller/ProductController");
const usermiddleware= require("../middleware/userMiddleware");
const ordermiddleware= require("../middleware/OrderMiddleware");
const orderController= require("../controller/OrderController");
const router= express.Router();



router.post("/createproduct", productController.createProduct);
router.post("/create-user",usermiddleware.checkHeader,userController.createUser);
router.post("/create-order",ordermiddleware.checkHeaderPresentOrNot, orderController.createOrder);



module.exports=router;
