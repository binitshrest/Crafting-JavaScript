
// function check(x, y){
//     if(typeof(x) !== 'number' || typeof(y) !== 'number'){
//         throw new Error("x and y should be the number");
//     }
// }
// function Addition(x, y){
//     check(x,y);
//     return x + y;
// }

// console.log(Addition(30, 50));


// function isNumber(a){
//     return typeof(a) === "number";
// }

// function subtract(x, y){
//     if(!isNumber(x) || !isNumber(y)){
//         throw new Error("x and y should be number");
//     }
//     return x-y;
// }

// console.log(subtract(60,20));
function multipleArguments(...m){
    console.log(m);
}

multipleArguments(10,20,30,40,50);

function subs(){
    console.log(arguments);
}

subs(10,20,30,40,50,60);


function manny(){
    console.log(arguments['2']);
}
manny(10,20,30,40,50,60); 

const addition = (x, y) => x+y;

console.log(addition(20,90));

const displayAllArguments = (...p) => console.log(p);

displayAllArguments(1,2,4,5,6,7);


function fnA(x){ 
    console.log("calling function fnA...");
    x();
}

function fnB(){
    console.log("I am Binit from func B");
}

fnA(fnB); //fnA(x) == fnA(fnB)  x = fnB)

// function fnA(x, y){
//     console.log("calling x....");
//     x();
//     y("Binit");
// }

// function fnB(){
//     console.log("I am Binit from fnB");
// }

// fnA(fnB,(name) => console.log("your name is ", name));



let fruits = ["❤️", "👌", "🍌", "😍", "🍇"];

function printFruit(fruit, index){ //unit or each fruit function
    console.log("fruit -->", fruit, index);
}

fruits.forEach(printFruit);


// using arrow function 

fruits.forEach((fruit, index) => console.log("fruit -->", fruit, index));


function customForEach(cb){
    for(let i = 0; i < fruits.length; i++){
        cb(fruits[i], i);
    }
}

const printer = (fruit, index) => console.log("Custom forEach fruits -->" , fruit, index);

customForEach(printer);

