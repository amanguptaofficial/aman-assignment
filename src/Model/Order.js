const mongoose= require('mongoose');

const OrderSchema= new mongoose.Schema({
  
    userId:{
      type:String,
      required:true,
    },
    productId:{
       type:String,
       required:true,
    },
    isFreeAppUser:{
       type:Boolean
    },
    date:{
      type:Date,
      default:new Date().toISOString().split('T')[0],
    },
    amount:{
      type:Number,
      default:0
    }
     
 })
const Order= mongoose.model("Order",OrderSchema,"Order");
module.exports=Order