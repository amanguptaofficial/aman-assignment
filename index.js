const express = require("express"); // here we are importing the express package.
const router = require("./src/routes/route");

const app = express(); // here we are creating the instance of the express by using this we can access all the functionalities of the express like server creation ,middleware,routes

app.use(express.json()); // this is middleware by using this express js automatically parse the json formatter data which is coming from the request into the javascript object  and make it availabe into the request body.
app.use(express.urlencoded({ extended: true })); // it is a middleware by using this it parse the html form data or application/ x-form-urlencoded data which is coming from the Html form and make it availabe into the reques body

app.use("/", router);

const PORT = 3000; // in this line we are defint our port

app.listen(PORT, () => {
  console.log(`🚀The Backend Server is up and running on port ${PORT}🚀`);
});


module.exports=router
