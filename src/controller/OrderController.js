const orderService = require("../service/OrderService");

const createOrder = async (req, res) => {
  try {
    const createdOrder = await orderService.orderCreatingService(req.body);
     res.send(createdOrder);
  } catch (error) {
    res.send({ code: 400, msg: "Error Occured In Create Order", data: {} });
  }
};

module.exports={createOrder};
