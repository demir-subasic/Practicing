import React, { useState } from 'react';
import ProductItem from './ProductItem';
import './Products.css';

const productsData = [
  {
    id: 1,
    name: 'Nutrient-Dense Bundle 1',
    description: 'A bundle of nutrient-dense vegetables for improved health.',
    price: 19.99,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Nutrient-Dense Bundle 2',
    description: 'Another bundle of nutrient-dense vegetables with a variety of produce.',
    price: 24.99,
    image: 'https://via.placeholder.com/150',
  },
  // ... dodajte još proizvoda po potrebi
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-container">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <p>Items not found</p>
        ) : (
          filteredProducts.map(product => (
            <ProductItem
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
