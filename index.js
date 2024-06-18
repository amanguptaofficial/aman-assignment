const express = require("express"); // here we  are imported the express package
const mongoose = require("mongoose"); // here we are imported the mongoose package mongoose is a package which help to create connection between express and mongodb.
const app = express(); // here we are creating the instance of the express
const router = require("./src/routes/route");

app.use(express.json()); // here we are using inbuilt middleware by using this express js automatically parse the json formatted data which is coming from the request body into the javascript object and make it availabe in the req body
app.use(express.urlencoded({ extended: true })); //here we are using inbuilt middleware it parse the Html form data or Applicatio/x-www-form-urlencoded data which is coming from the HTML form it is used to parse the data and make it availabe in reques body

const PORT = 3000; // here we are defining the port number
const URI =
  "mongodb+srv://amangupta:Opx0adQCbdyU0RpE@aman.id6td9f.mongodb.net/projectThreejwtAuth";
mongoose
  .connect(URI) 
  .then(() => {
    console.log("mongoDB connect successfully..");
  })
  .catch((error) => {
    console.log("error Occured in mongoDB connection....");
  });

// here we are connection mongoDB.

app.use("/", router); // in this line we are using middleware it forward the request into the router file

app.listen(PORT, () => {
  console.log(`Server Created Successfully at PORT ${PORT}....`);
}); // here we are creating the server

module.exports = router;
