import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  return (
    <div>
       <Router>
          <Routes>
              <Route path='/' exact element={<Home/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>
          </Routes>
          
       </Router>
    </div>
  );
}

export default App;
