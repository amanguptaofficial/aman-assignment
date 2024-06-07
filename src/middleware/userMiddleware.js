const checkHeader = function (req, res, next) {
  if (req.headers.hasOwnProperty("isfreeappuser")) {
    req.body["isFreeAppUser"] = req.headers.isfreeappuser;
    next();
  } else {
    res.send({ code: 400, msg: "Missing an mandatory header", data: {} });
  }
};

module.exports = { checkHeader };
