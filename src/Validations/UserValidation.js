const isValid = function (name) {
  if (typeof name == "undefined" || typeof name == null) return false;
  if (typeof name == "string" && name.trim().length == 0) return false;
  return true;
};

const ischeckValid = function (name) {
  const regex = /^[A-Za-z ]+$/;
  if (regex.test(name)) return true;
  return false;
};

const isCheckAddress = function (address) {
  const regex = /^(?![0-9]+$)[a-zA-Z0-9 .,'-]*$/;

  if (regex.test(address)) return true;
  return false;
};

const isEmpty = function (data) {
  if (Object.keys(data).length == 0) return false;
  return true;
};

const isvalidAge = function (age) {
  if (typeof age == "number" && Number.isInteger(age)) return true;
  return false;
};
const isValidGender = function (gender) {
  const age = ["male", "female", "others"];
  if (age.includes(gender)) return true;
  return false;
};

module.exports = { isValid, ischeckValid, isCheckAddress, isEmpty, isvalidAge };
