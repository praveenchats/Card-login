import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

const Navigation = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {

    localStorage.setItem('authenticated', false);
    navigate('/login'); 
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login/Register</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
