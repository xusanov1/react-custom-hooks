import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.category.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <Link to={`/product/${product.id}`} className="view-details">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
