const fruits = ["❤️", "👌", "🍌", "😍", "🍇"];

// function printFruit(fruit, index){
//     console.log("fruit --->", fruit, index);
// }

// fruits.forEach(printFruit);

fruits.forEach((value, index) => console.log("fruit --> "), value, index);

function customforEach(cb){
    for(let i = 0; i < fruits.length; i++){
        cb(fruits[i], i);
    }
}

const printer = (value, index) => console.log("fruits -->", value, index);
customforEach(printer);


const id = [1, 2, 3, 4, 5];
