import React from 'react';

const Card = ({ title, description, imageUrl, addToDealsButton, checkDetailsButton, onAddToDeals, onCheckDetails }) => {
  return (
    <div className="card">
      {imageUrl && <img className="card-image" src={imageUrl} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
      {addToDealsButton && <button className="btn-add-deals" onClick={onAddToDeals}>Add to Deals</button>}
      {checkDetailsButton && <button className="btn-check-details" onClick={onCheckDetails}>Check Details</button>}
    </div>
  );
};

export default Card;
