const myHeros=["IM","SM","HULK"];
const myHero2=["SuperMan","BM"];
// myHeros.push(myHero2);

// const joinedArr=myHeros.concat(myHero2);
// console.log(joinedArr);

// const allHeros=[...myHeros,...myHero2];
// console.log(allHeros);

// const another_array=[5,[5,5],[5,[5,[5,5,[5,5]]]]];
// const chng=another_array.flat(Infinity);
// console.log(chng);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));