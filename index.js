/*here we are import the express package*/
const express = require("express");
const router = require("./src/route/route");
/** Here we are creating the instace of express by using this we can get all the functionalties 
   of the express like route creation, middleware,server*/
const app = express();
/** This is a middleware by using this express js automatically parse json formatted data which is coming
    from the request into the javascript object and make it availabe for request body*/
app.use(express.json());
/**This is a middleware it parse the html form data or Application or x-www-form-urlencodeddata.
     which is coming from the html form it is parse the data and set into the request body*/
app.use(express.urlencoded({ extended: true }));

/**In this line we use middleware by using this middleware we are forward the request.. to the routes  */
app.use("/", router);
/**In this line we are defining our PORT Number */
const PORT = 3000;

/**In this line we are creating a server at specific port we have a listen function for server creation
 * it take two parameter first is PORT and second is Callback function */
app.listen(PORT, () => {
  console.log(`The Bakend Server is Running at the PORT ${PORT}`);
});

module.exports = router;
