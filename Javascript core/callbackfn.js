//high order functions

function fnA(x){ //x = fnB //high order function
    console.log("calling x...");
    x(); //fnB()
}

function fnB(){
    console.log('I am Piyush in fnB');
}

fnA(fnB)  //fnB is callBack function//fnA(fnB -> reference)

//if any function take another function as argument 
//this is high order function

//high order function is the special type of function which
//take another function as arguement.

function funA(x,y){
    console.log("calling x...");
    x();
    y("Binit Shrestha");
}

function funB(){
    console.log("I am Binit in funB");
}

// funA(funB, function(){
//     console.log("Second Function");
// })

funA(funB, (name) => console.log('you name is '+ name)) //()=> anonymous function


const fruits = ["❤️", "👌", "🍌", "😍", "🍇"];

function printFruit(fruit, index){
    console.log('fruit-->', fruit, index)
}
//types of methods in Arrays or high order functions
//forEach
fruits.forEach(printFruit);
console.log('using arrow function');
fruits.forEach((value,index) => console.log('fruit-->',value,index));

console.log("Create custom forEach");

// function customForEach(cb){
//     for(let i = 0; i < fruits.length; i++){
//         cb(fruits[i], i);
//     }
// }

// customForEach((value, index) => console.log('custom ForEach value', value, index))

function customForEach(cb){
    for(let i = 0; i < fruits.length; i++){
        cb(fruits[i], i);
    }
}

const printer = (value, index) => console.log('custom for each', value, index);

customForEach(printer);
console.log("#############################################3")
fruits.forEach((v) => console.log(v));


//.map() method
console.log("map method working")
const bugedFruit = fruits.map( f => f + "🦠"); // arrow function return by itself
console.log('bugged Fruits', bugedFruit);

console.log("map function implementation");

const bugedfruits = fruits.map(function(f){ //normal function has to be returned
    f = f + "🦠";
    return f;
})

console.log('2nd map ways', bugedfruits);

//.filter() method
const nums = [1, 2, 3, 4, 5, 6, 7 ];

function isEven(num){
    return num%2 === 0;
}

console.log(".filter method");
const result = nums.filter(isEven);
console.log("using function ", result);

const ans = nums.filter(v => v%2 === 0);
console.log("without function using arrow", ans);

//high order function 
//filter, map, indexOf, find, forEach, reduce

console.log(".reduce high order function")
console.log(".reduce works like prefix sum which add all the prev value to current")
const values= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const res = values.reduce((prev, current) => prev + current, 0);
console.log(res);

console.log(".reduce using accumulator");

const acc = (prev, current) => prev + current
const rslt = nums.reduce(acc, 0);
console.log(rslt);
/////////////////////////////////////
function accumulator(prev, current){
    prev = prev + current;
    return prev;
} 

const test = nums.reduce(accumulator, 0);
console.log("creating full function",test);


//to sum all the even numbers only 
const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const out = digits.filter(i => i%2 === 0);
// const sum = out.reduce((prev, current) => prev + current, 0);
// console.log(sum);

//shorter ways
const output = digits
.filter(c => c%2 === 0)
.reduce((prev, curr) => prev + curr, 0);
console.log("chaining of HOF", output);
//more efficient way

const yay = digits
.reduce((prev, c) => {
    if(c%2 === 0)
        return prev + c;
    return prev //<--else part
}, 0)

console.log(yay);


const arr = [5, 1, 3, 2, 6];

const outputs = arr.reduce(function(max, curr){
    if(curr > max){
        max = curr;
    }
    return max;
})

console.log("output =",output);

const array = [5, 1, 3, 2, 6];

function findSum(array){ //without reduce function
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}
console.log("Without reduce fn= ",findSum(array));

const out = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0);

console.log("with reduce= ",out);

const users = [
    {firstName: "Binit", lastName: "Shrestha", age:50},
    {firstName: "Manish", lastName: "Thapa", age: 22},
    {firstName: "Bishal", lastName: "Rauniyar", age: 24},
    {firstName: "Suraj", lastName: "Thapliyal", age: 50},
];

console.log(users.map((x) => x.firstName + " " +x.lastName)); //x is the object
console.log(users.filter(function(x){
    if(x.age == 23) return x.age; 
}));
console.log(users.filter((x) => x.age >= 30).map((x) => x.firstName));