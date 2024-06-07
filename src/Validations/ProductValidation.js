const isEmptyBody = function (data) {
  if (Object.keys(data).length == 0) return false;
  return true;
};

const isValidString = function (name) {
  const regex = /^[A-Za-z ]+$/;
  if (regex.test(name)) {
    return true;
  } else {
    return false;
  }
};

const isValidNumber = function (value) {
  const regex = /^\d+(\.\d{1,2})?$/;
  if (regex.test(value)) {
    return true;
  } else {
    return false;
  }
};

const isValid = function (value) {
  if (typeof value == "undefined" || typeof value == null) return false;
  if (typeof value == "string" && value.trim().length == 0) return false;
  return true;
};

const isValidPrice = function (price) {
  if (typeof price == "number") return true;
  return false;
};

module.exports = { isEmptyBody, isValidString, isValid, isValidNumber ,isValidPrice};
