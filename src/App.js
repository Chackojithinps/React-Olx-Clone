import React, { useEffect,useContext } from 'react';
import './App.css';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { getAuth, onAuthStateChanged } from "firebase/auth";

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import FirebaseContext, { AuthContext } from './store/firebaseContext';

function App() {
  const {setUser} =useContext(AuthContext)
  const {app} = useContext(FirebaseContext)
  useEffect(()=>{
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
         setUser(user)
    }
  })
});
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
