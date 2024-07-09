import { useState, useEffect } from 'react';
import { fetchProducts } from '../api/index';

const useFetch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return { products, loading, error };
};

export default useFetch;

