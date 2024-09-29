import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/homescreen/Main';
import Navbar from './pages/home/NavBar';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Router>
        <div>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
