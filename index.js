const express= require("express");
const app= express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const router= require("./src/routes/route");

app.use("/",router);

app.listen(3000,()=>{
  console.log(`server created successfully..at port 3000`);
})


module.exports=router;