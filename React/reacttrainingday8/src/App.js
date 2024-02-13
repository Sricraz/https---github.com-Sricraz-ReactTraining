import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./compoenets/header"; 
import Body from "./compoenets/Body";

const AppLayout = () => {
  return (
    <div className="app">
    <Header/>
    <Body/>

    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout />);

export default AppLayout;