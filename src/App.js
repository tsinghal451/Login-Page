
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home/home';
import Login from './components/LoginPage/login';
import Signup from './components/Signup/signup';
import React, { useEffect, useState } from 'react';
import { auth } from './firebase';

function App() {
   const[userName , SetUserName] = useState("")
  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      if(user){
        SetUserName(user.displayName)
      }else SetUserName("");
      
    });
  },[])
  return (
    <div className="App">

    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/" element={<Home name={userName} />} />

        
      </Routes>
    </Router>
     
    </div>
  );
}

export default App;
