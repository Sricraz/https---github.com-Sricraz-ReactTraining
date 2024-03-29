import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/header";
import Body from "./src/components/Body";

const AppLayout = () => {
   return (
   <div className = "container">
       <Header/>
       <Body/>
   </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);