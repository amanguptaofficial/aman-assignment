const service = require("../service/productService");
const createProduct = async (req, res) => {
  try {
    const data = req.body;
    const respData = await service.createProduct(data);
    res.send(respData);
  } catch (error) {
    res.send({ code: 400, msg: error, data: {} });
  }
};

module.exports={createProduct};