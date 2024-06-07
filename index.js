const express = require("express"); // in this line we are impoorting the express package
const app = express(); // here we are creating the instance of the express and hold in app variable by using this we can access all the functionalities of the express
const mongoose = require("mongoose");
const router = require("./src/Routs/route");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;
const URI =
  "mongodb+srv://amangupta:Opx0adQCbdyU0RpE@aman.id6td9f.mongodb.net/projectTwo";

mongoose
  .connect(URI)
  .then(() => {
    console.log("mongodb connected succesfully");
  })
  .catch(() => {
    console.log("error occured to connect mongodb");
  });

app.use("/", router);

app.listen(PORT, () => {
  console.log(
    "Server created successfully at port 3000 \n http://localhost:3000"
  );
});
