import React from 'react';
import useFetch from '../../hooks/useFetch';
import ProductCard from '../card/ProductCard';

import './ProductList.css'
const ProductList = () => {
  const { products, loading, error } = useFetch('/products');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
};

export default ProductList;
