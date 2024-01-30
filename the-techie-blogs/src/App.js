import React from 'react';
import Header from './components/header';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/post/:postId">
            <PostDetail />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
        <Header />
      </div>
    </Router>
  );
}

export default App;
