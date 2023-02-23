import React, { useState } from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Aquí se puede realizar una acción con la búsqueda, como enviarla a un servidor o actualizar la lista de elementos mostrados
    console.log(searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          uGame
        </Link>
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar juegos"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button type="submit" className="search-button">
            <FaSearch />
          </button>
        </form>
        <div className="navbar-icons">
          <Link to="/login" className="navbar-icon">
            <FaUser />
          </Link>
          <Link to="/cart" className="navbar-icon">
            <FaShoppingCart />
          </Link>
          <button className="navbar-icon">
            <FaThumbsUp />
          </button>
          <button className="navbar-icon">
            <FaThumbsDown />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
