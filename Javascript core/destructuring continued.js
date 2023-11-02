const fruits = ["🍎", "🍌", "🍇","🍋", "🍈","😊"];

let[...p] = fruits;

// //1st concept
// [second, value] = [c];

// //2nd concept
// [second, value] = p;

// console.log(value);
// console.log(second);

// const fruits = ["🍎", "🍌", "🍇","🍋", "🍈","😊"];

// let[a, ...c] = fruits;

// // console.log(c); //o/p [ '🍌', '🍇', '🍋', '🍈', '😊' ]

// // const x = [c, "❤️", "👌"];

// // console.log(x); //o/p [ [ '🍌', '🍇', '🍋', '🍈', '😊' ], '❤️', '👌' ]
// // console.log(x[0]); //o/p [ '🍌', '🍇', '🍋', '🍈', '😊' ]
// // console.log(x[1]); // ❤️

// //SPREAD OPERATOR ...
// const x = [...c, "❤️", "👌"] //spread array c to make all 1d
// console.log(x);
console.log("#########################################"); 
//REST OPERATOR
let [a, ...c] = fruits 
// console.log(a,c);
// console.log(c);

const x = [...c, '❤️', '👌'] //SPREAD OPERATOR   
console.log(x);





