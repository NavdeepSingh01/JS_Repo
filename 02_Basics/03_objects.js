//constructor se banega to singleton
//object.create->singleton

const mySym= Symbol("key1")
const jsUser={
    name:"Hitesh",
    [mySym]:"mykey1",
    age: 18,
    city: "raipur",
    isLoggedIn: true,

};
console.log(jsUser.name);
console.log(jsUser["name"]);//preffered
console.log(typeof jsUser[mySym]);//preffered

// Object.freeze(jsUser);
// jsUser.city="Delhi" // freeze object will not be changed
// console.log(jsUser.city); // will print raipur
// console.log(jsUser);
jsUser.greeting= function(){
    console.log("Hello js user");
}
console.log(jsUser.greeting);

jsUser.greeting2=function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greeting2());

