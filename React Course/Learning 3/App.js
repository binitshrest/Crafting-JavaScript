
{/* <div id = "parent">
        <div id = "child1">
            <h1>I am h1 tag</h1> //sibling 1
            <h2>I am h2 tag </h2> //sibling 2
        </div>
        <div id = "child2">
            <h1>I am h1 tag</h1> //sibling 1
            <h2>I am h2 tag </h2> //sibling 2
        </div>
    </div> */}
                        //           tag    attribute    children div nesting h1 
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [   //use array for siblings
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
    ]),
    React.createElement("div", { id: "child2" }, [   //use array for siblings
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
])
]);





// code 2------------------->
// {/* <div id = "parent">
//         <div id = "child">
//             <h1>I am h1 tag</h1> //sibling 1
//             <h2>I am h2 tag </h2> //sibling 2
//     </div>
// </div> */}
//                         //           tag    attribute    children div nesting h1 
// const parent = React.createElement("div", { id: "parent" }, 
//     React.createElement("div", { id: "child" }, [   //use array for siblings
//         React.createElement("h1", {}, "I am h1 tag"),
//         React.createElement("h2", {}, "I am h2 tag")]
//     )
// );

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);



// Code 1 ----------------->
              // React.createElement(tags,attribute, children)
// let heading = React.createElement("h1", {id : "heading" }, "Hello World from React!");

// let root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading); //returns object

// root.render(heading);