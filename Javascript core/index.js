setTimeout(function (){
    console.log("timer");
}, 5000);

function x(y){
    console.log("x");
}

x(function y(){
    console.log("y");
})

//Event Listener
// let count = 0;
// document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("Button Clicked", ++count);
// })

const radius = [2, 4, 5, 8, 9];

const areaOfCircle = function(radius){
        const output = [];
        for(let i = 0; i < radius.length; i++){
            output.push(Math.PI * radius[i] * radius[i]);
        }
        return output;
};

console.log(areaOfCircle(radius));