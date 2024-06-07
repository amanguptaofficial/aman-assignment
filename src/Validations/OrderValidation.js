const mongoose = require("mongoose");

const isEmpty = function (data) {
  if (Object.keys(data).length == 0) return false;
  return true;
};

const isValidId = function (id) {
  if (mongoose.Types.ObjectId.isValid(id)) return true;
  return false;
};

module.exports = { isEmpty,isValidId };
