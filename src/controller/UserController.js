const userService = require("../service/UserService");

const createUser = async (req, res) => {
  try {
    const resData = await userService.createUser(req.body);
    res.send(resData);
  } catch (error) {
    res.send({ code: 400, msg: "error occured", data: {} });
  }
};

module.exports = { createUser };
