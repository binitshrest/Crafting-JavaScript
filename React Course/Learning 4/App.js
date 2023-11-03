import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX =>Babel transpiles it to React.createElement => ReactElement - JS Object => HTML Element(render)
const element = <span>React Element! </span>;
{
  /* element is called in curly braces */
}

const Title = () => (
  <h1 className="heading" tabIndex="1">
    {element}
    Welcome to React from JSX🚀
  </h1>
);

//component composition
const Headingcomponent = () => (
  <div id="container">
    {Title()}
    <Title />
    <h1 className="heading">Welcome to Functional Component🚀</h1>
  </div>
);

root.render(<Headingcomponent />); //Components are called using tags

// Code part 1
// const jsxHeading2 = (
//     <h1 className="heading" tabIndex="1">
//       Welcome to React from JSX🚀
//     </h1>
//   );
// root.render(jsxHeading2); //this is how react render react element
