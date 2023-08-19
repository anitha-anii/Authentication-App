import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import './App.css';

function App() {
  return (
    <div className="App">
       <Routes>
       <Route exact path="/" element={<Login />} />
        <Route path="/profile" element={<Profile/>} />
        </Routes>

        </div>
  );
}

export default App;
