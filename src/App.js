import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/register';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes className='navbar'>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/home" element={<Home/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
