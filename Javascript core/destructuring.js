// const fruits = ["🍎", "🍌", "🍇","🍋"];

// De-Structuring
// 1)
// const[a, b, c] = fruits;
// console.log(a, b, c);

//2)
// const[, , z] = fruits;
// console.log(z);

//3)
// const[a,b,c,d,e,f] = fruits
// console.log(a,b,c,d,e,f);

const fruits = ["🍎", "🍌", "🍇","🍋", "🍈","😊"];
// 4)
//Arrays of 1000 values
//[a,b, 1000-2]
const[value, second, ...c] = fruits  //... REST operator
console.log(value);
console.log(second);
console.log(c); // ...c using console print rest of the value

//5) 
//if we want to print same value in reverse
const[a, b, ...z] = fruits.reverse()  //... REST operator
console.log(a);
console.log(b);
// console.log(z); // ...c using console print rest of the value

console.log("######################################");
console.log("Swapping without reverse");
const myfruits = ["🍎", "🍌", "🍇","🍋", "🍈","😊"];

let[value1, second2] = myfruits;

[second2, value1] = [value1, second2];
console.log(value1, second2);

console.log("######################################");

console.log("Swapping with reverse");
const juicyfruits = ["🍎", "🍌", "🍇","🍋", "🍈","😊"];

let[x, y] = juicyfruits.reverse();

[y, x] = [x, y];
console.log(x, y);

console.log("######################################");

