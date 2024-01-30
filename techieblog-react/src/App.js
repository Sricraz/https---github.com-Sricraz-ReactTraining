import './App.css';
import {Routes, BrowserRouter, Route } from "react-router-dom";
import Home from './pages/home';
import AddEditBlog from './pages/AddEditBlog';
import About from './pages/About';
import Blog from './pages/Blog'; 
import NotFound from './pages/NotFound';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Header/>
          <ToastContainer/>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/addBlog" element={<AddEditBlog/>}/>
              <Route path="/editBlog/:id" element={<AddEditBlog/>}/>
              <Route path="/editBlog" element={<AddEditBlog/>}/>
              <Route path="/blog" element={<Blog/>}/> 
              <Route path="/about" element={<About/>}/>  
              <Route path="*" element={<NotFound/>}/>  
              </Routes>  
              <Footer className="foot">@copyright 2024</Footer>
 
</div>

    </BrowserRouter>

  );
}

export default App;
