import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = (
  <h1 className="head" id="heading">
    React jsx is a JavaScript syntax extension
  </h1>
);

const HeadingComponentFunc = function () {
  return (
    <h1 className="head" id="heading">
       It is a JavaScript extension that allows us to describe React's object tree using a
        syntax that resembles that of an HTML template
    </h1>
  );
};

// React Functional Component
const HeadingComponent = () => {
  return (
    <h1 className="head" id="heading">
      React using jsx
    </h1>
  );
};

const Title = () => <h1>React Training Day 4</h1>;

const title2 = <h1>React JSX is an embeddable XML-like syntax </h1>;

const HeadingComponent2 = () => (
  <div>
    {title2}
    <Title />
    <h1 className="head" id="heading">
      React JSX is a syntactic sugar of the React. 
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);

