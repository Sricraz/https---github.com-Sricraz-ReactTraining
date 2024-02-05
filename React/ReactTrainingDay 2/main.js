
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", { id: "heading" }, "I am the new to react js"),
      React.createElement("h3", { id: "heading2" }, "I am learning react js from Priya"),
    ])
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);