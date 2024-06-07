const product = require('../Model/product');
const validator= require("../Validations/ProductValidation");

const createProduct= async function(data)
{
try {
   if(!validator.isEmptyBody(data)) return {code:400,msg:"please provide me product data",data:{}}
    const {name, category,price}=data;
   if(!validator.isValid(name)) return {code:400,msg:"name is required",data:{}};
   if(!validator.isValidString(name)) return {code:400,msg:"name contains only the character",data:{}};
    data.name= data.name.trim().split(" ").filter((word)=>word).join(' ');
   if(!validator.isValid(category)) return {code:400,msg:"category is required",data:{}};
   if(!validator.isValidString(category)) return {code:400,msg:"category contains only the character",data:{}};
   data.category= data.category.trim().split(" ").filter((word)=>word).join(' ');
   if(!price) return {code:400,msg:"Price is required",data:{}};
   if(!validator.isValidPrice(price)) return {code:400,msg:"Price contains only the number value", data:{}};
   if(!validator.isValidNumber(price)) return {code:400,msg:"Price can contain only number and 2 floting number",data:{}};
   const insertedData = await product.create(data);
    if(!insertedData) return {code:400,msg:"product not inserdted",data:{}};
    const sendingData={code:200, msg:"Succes", data:insertedData};
    return sendingData;
} catch (error) {
   return {code:400, msg:error,data:{}}; 
}
}

module.exports={createProduct};