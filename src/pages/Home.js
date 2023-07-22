import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import image1 from '../assets/car1.jpeg';
import image2 from "../assets/car2.jpeg";

const Home = () => {
  const navigate = useNavigate();
  const authenticated = localStorage.getItem('authenticated') === 'true';

  const handleAddToDeals = () => {
    if (authenticated) {

      console.log('Added to Deals!');
    } else {
      navigate('/login'); 
    }
  };

  const handleCheckDetails = () => {
    if (authenticated) {
      
      console.log('Checking Details!');
    } else {
      navigate('/login'); 
    }
  };
  if (!authenticated) {
    navigate('/login');
    return null;
  }


  return (
    <div>
    <h2>Home Page</h2>
    <div className="card-container">
      <Card
        title="Card 1"
        description="This is the Praveen card"
        imageUrl={image1}
        addToDealsButton={authenticated}
        checkDetailsButton={authenticated}
        onAddToDeals={handleAddToDeals}
        onCheckDetails={handleCheckDetails}
      />
      <Card
        title="Card 2"
        description="This is the Praveen card"
        imageUrl={image2}
        addToDealsButton={authenticated}
        checkDetailsButton={authenticated}
        onAddToDeals={handleAddToDeals}
        onCheckDetails={handleCheckDetails}
      />
    </div>
  </div>
  );
};

export default Home;
