const today=new Date();

  const dateonly=new Date().toISOString().split('T')[0]
  console.log(dateonly)

const date= new Date();

console.log(date.toLocaleDateString('en-GB'))
const newDate=new Date().toLocaleDateString('en-GB')
console.log(newDate);