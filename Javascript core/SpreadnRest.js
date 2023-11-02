const fruits = ["🍎", "🍌", "🍇","🍋", "🍈","😊"];
// Shallow Copy
// let [a, ...c] = fruits;
// console.log(c);

// const x = c; //x = c => c = ["🍌", "🍇","🍋", "🍈","😊"] // reference variable and shallow copy
// x.push('😁'); //x = ["🍌", "🍇","🍋", "🍈","😊"].push("😁")

// x.pop();  //popped the value from both x and c
// console.log(x); 
// console.log(c);


//Deep copy
let [a, ...c] = fruits;
console.log(c);

const x = [...c]; //x = c => c = ["🍌", "🍇","🍋", "🍈","😊"] // Deep Copy 
x.push('😁'); //x = ["🍌", "🍇","🍋", "🍈","😊"].push("😁")

// x.pop();  //popped the value from both x and c
console.log(x);  //value is pushed only in x
console.log(c);  // but not y