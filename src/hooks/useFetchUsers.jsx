import { useState, useEffect } from 'react';
import { fetchUsers } from '../api';

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetchUsers();
        setUsers(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return { users, loading, error };
};

export default useFetchUsers;
