const user=require("../Model/User");
const validator= require("../Validations/UserValidation");

const createUser =async function(userdetails)
{
  try {
   if(!validator.isEmpty(userdetails)) return {code:400,msg:"Please provide the user data",data:{}};
   const{name,balance,address,age,gender,isFreeAppUser}=userdetails;
   if(!validator.isValid(name)) return {code:400,msg:"Name is Required ",data:{}};
   if(!validator.ischeckValid(name)) return {code:400,msg:"Name can contains only the character",data:{}};
   userdetails.name=userdetails.name.trim().split(" ").filter((name)=>name).join(" ");
   
   if(!validator.isValid(address)) return {code:400, msg:"Adress is required only String with character",data:{}};
   if(!validator.isCheckAddress(address)) return {code:400,name:"Adress can contains only character and Number",data:{}};
   userdetails.address= userdetails.address.trim().split(" ").filter((word)=>word).join(" ");
 
    if(!age) return {code:400,msg:"Age is Required.." ,data:{}}
    if(!validator.isvalidAge(age)) return {code:400,msg:"Age can take only Integer value",data:{}};
    if(age<=15) return {code:400,msg:"Age Must be Greater than or Equal to 15",data:{}};
    if(age>=100) return {code:400,msg:"Age Must be less than or Equal to 100",data:{}};
   if(balance){
    if(!validator.isvalidAge(balance)) return {code:400,msg:"Balance take only integer value",data:{}};
   }
    if(!gender)  return {code:400,msg:"Geneder is Required",data:{}};
    userdetails.gender= userdetails.gender.toLowerCase();
    if(!validator.ischeckValid(gender)) return {code:400,msg:"Gender can take only Male or Female",data:{}};
    const insertedUserData = await user.create(userdetails);
    if(!insertedUserData) return {code:400,msg:"User is not created",data:{}};
    const data= {code:200,msg:"Success",data:insertedUserData};
    return data;

  } catch (error) {
     return error; 
  }
}

module.exports={createUser};