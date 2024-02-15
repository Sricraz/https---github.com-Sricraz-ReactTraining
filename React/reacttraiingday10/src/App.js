import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import {Routes, BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import  About from "./pages/About";
import  Contact from './pages/Contact'
import FoodOrder from "./pages/FoodOrder";
import Settings from "./pages/Settings";
import  Error  from "./pages/Error";



const AppLayout = () => {
  return (
    <div className="app">
    <Header/>
    <BrowserRouter>
        <div className="App">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/foodOrder" element={<FoodOrder/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/settings" element={<Settings/>}/>
              <Route path="*" element={<Error/>}/>  
              </Routes>  

 
</div>


              
    <Body/>
    <br/>     <br/>
    <br/>
   <br/>
    <br/>

    <Footer/>
   
    </BrowserRouter>

    </div>
    
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout />);

export default AppLayout;