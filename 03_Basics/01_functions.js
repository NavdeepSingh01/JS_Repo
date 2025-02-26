// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }
//sayMyName();
// function addTwoNumber(number1,number2){
//     return number1+number2  
// }
// const result=addTwoNumber(3,5);
// console.log(result);
// function LoginUserName(username){
//     return `${username} just logged in`
// }
// console.log(LoginUserName("Navdeep"));


// function calculateCartPrice(...num1){
//     return num1;
// }

// console.log(calculateCartPrice(200,400,500));

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}
handleObject(user);
