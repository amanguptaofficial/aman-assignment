const order = require("../Model/Order");
const user = require("../Model/User");
const product = require("../Model/product");
const validation = require("../Validations/OrderValidation");

const orderCreatingService = async function (orderData) {
  try {
    if (!validation.isEmpty(orderData)) return { code: 400, msg: "Please provide me data userId,ProductID",data: {}};
    const { userId, productId, isFreeAppUser } = orderData;
    if (!userId) return { code: 400, msg: "UserId is Required..", data: {} };
    if (!validation.isValidId(userId)) return { code: 400, msg: "Please give me the correct UserID", data: {} };
    if (!productId) return { code: 400, msg: "productId is Required", data: {} };
    if (!validation.isValidId(productId)) return { code: 400,msg: "Please give me the correct ProductId", data: {} };
    const checkUserExits = await user.findById(userId);
    if (!checkUserExits) return { code: 400, msg: "User is not exits ", data: {} };
    const checkProductExits = await product.findById(productId);
    if (!checkProductExits) return { code: 400, msg: "Product is not exits ", data: {} };  

    let insertOrder;
   if (isFreeAppUser=='true') {
       orderData.amount = 0;
      insertOrder = await order.create(orderData);
     } else {
     if (checkProductExits.price > checkUserExits.balance) {
      return { code: 400, msg: "Your balance is less than product price ..Insufficient Balanace...", data: {} };
      } else {
        const remainingAmount = checkUserExits.balance - checkProductExits.price;
        orderData.amount = checkProductExits.price;
        const updatedUser= await user.updateOne({_id:userId}, {$set:{balance:remainingAmount}});
        insertOrder = await order.create(orderData); 
        }
      }
   const successData = { code: 200, msg: "success", data:insertOrder  };
      return successData;
    
  } catch (error) {
    return error;
  }
};

module.exports = { orderCreatingService };
