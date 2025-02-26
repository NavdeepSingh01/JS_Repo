// let var const
// let a=10
// const b=20
// var c=30
// console.log(a);
// console.log(b);
// console.log(c);

//curly braces {}-> scope

// if(true){
//     var a=10;
// }
// console.log(a);// gives ouput so var is not recommended


// global and local scope

// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     console.log(website);// cant access
//     two()

// }

// one()
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));
