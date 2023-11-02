function isNumber(x){
    return typeof(x) === "number";
}

function add(x , y){
    if(!isNumber(x) && typeof(y) !== "number"){
        throw new Error('x and y must be a number');
    }
    return x+y;
}

// console.log(add("Binit", "Shrestha"));

console.log(add(30, 40));

function subtract(x, y){
    if(!isNumber(x) && !isNumber(y)){
        throw new Error('x and y must be a number');
    }
    return x-y;
}

console.log(subtract(30, 40));

//Multiple arguments
function sub(...x){
    console.log(x);
}

console.log(sub(10, 20, 30, 40, 50))


//##############################################
function subs(){
    // console.log(arguments);
    console.log(arguments['0']); //print 10
}
console.log(subs(10,20,30,40,50)); // creates objects out of arguments

//Arrow functions
const addition = (x, y) => {
    return x+y;
} 

console.log(addition(10,20));

const add1 = (x, y) => x+y;

console.log(add1(10,20));

const displayAllargs = (...x) => console.log(x);

displayAllargs(1,2,3,4,5,6,7);
// argument keyword doesn't work in arrow function

const addme = function(x, y){
    return x+y;
}


console.log(addme(50, 50));