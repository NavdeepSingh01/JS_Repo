// const tinderUser=new Object() -> singleton
const tinderUser={} // not singleton
// console.log(tinderUser)
tinderUser.id=1
tinderUser.name="sam"
// console.log(tinderUser);

const details={
    id: 2,
    name : {
        fullname : {
            firstname: "navdeep ",
            middlename :"Singh",
            lastname: "Saluja"
        }
    }
}
// console.log(details.name.fullname.firstname);

const obj1={1: "a", 2:"b"}
const obj2={3: "a", 4:"b"}

// const obj3={obj1,obj2}; doest not merge it creates object of objects
// console.log(obj3); 

// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);

const obj3={...obj1,...obj2}
console.log(obj3);


console.log(Object.keys(tinderUser));// print keys of the object
console.log(Object.values(tinderUser));// print values of the object



