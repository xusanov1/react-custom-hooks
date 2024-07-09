import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/list/ProductsList';
import ProductDetail from './components/details/ProductDetail';
import Nav from './components/nav/Nav'
import User from './components/users/User';

const App = () => {
  return (
    <Router>
      <Nav />
      <div className="app">
        <Routes>

          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
