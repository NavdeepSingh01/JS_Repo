const myObject={
    Js :"Javascript",
    cpp : "C++",
    rb : "ruby"
}
// console.log(myObject);

// for(const key in myObject){
//     console.log(myObject[key]);  
// }

// fon in loop object

// does for in loop works for array?

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key);// does not return value directly
}


// not iterable
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }