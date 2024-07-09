import { useState, useEffect } from 'react';
import { fetchProductById } from '../api';

const useFetchProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetchProductById(id);
        setProduct(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  return { product, loading, error };
};

export default useFetchProduct;
