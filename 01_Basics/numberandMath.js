const value= 50;
const newVal=new Number(50); //specifically defining as number
// console.log(value); outputs only value
// console.log(newVal); output dtype and value



// console.log(newVal.toString()); outputs 50 as string
// console.log(typeof newVal.toString()); outputs string

// console.log(newVal.toFixed(2)); outputs upto 2 decimal places
//precision && toLocaleString Function

// console.log(Math);
// all mathematical function like sqrt log max min is in Math library

console.log(Math.random());
console.log(Math.random()*10+1);

const minimum=10;
const maximum=20;

console.log(Math.floor(Math.random()*(maximum-minimum+1))+minimum);



