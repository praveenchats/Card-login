import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import LoginRegister from './pages/LoginRegister';
import Home from "./pages/Home";
import Navigation from './components/Navigation';
import "./style.css"

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
