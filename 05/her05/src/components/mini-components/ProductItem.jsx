import React from 'react';
import './ProductItem.css';

const ProductItem = ({ id, name, description, price, image }) => {
  return (
    <div className="product-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductItem;
