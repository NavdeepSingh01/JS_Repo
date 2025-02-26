// global scope ke pollution ko hattane ke liye
// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();


// to explicitly end iife semicolon is wrote at the end
// ( () => {
    //unnamed iife
//     console.log(`DB CONNECTED TWO`);
// } )();

// ( (name) => {
    //iife with passed parameter
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')