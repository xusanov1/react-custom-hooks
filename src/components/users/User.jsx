import React from 'react';
import useFetchUsers from '../../hooks/useFetchUsers';
import './User.css';

const UserList = () => {
  const { users, loading, error } = useFetchUsers();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className="user-card">
          <img src={user.avatar} alt={user.name} className="user-avatar" />
          <div className="user-info">
            <h3 className="user-name">{user.name}</h3>
            <p className="user-email">{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
