import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "React Javascript is a JS libarary"),
    React.createElement("h2", { id: "heading2" }, "React is widely used in web development"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);