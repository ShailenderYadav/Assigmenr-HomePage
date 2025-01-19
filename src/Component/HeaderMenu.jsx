import React from 'react';
import registerKaro from '../image/registerKaro.webp';
import '../Css/HeaderMenu.css';

const HeaderMenu = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontSize: '16px',
    fontWeight: '500',
    padding: '5px 10px',
    cursor: 'pointer',
  };
  return (
    <div
      style={{
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo Section */}
      <div className="d-flex align-items-center">
        <img
          src={registerKaro}
          alt="Logo"
          style={{ height: '40px', marginRight: '10px' }}
        />
        <h2 style={{ margin: 0, color: '#f57c00' }}>RegisterKaro</h2>
      </div>

      {/* Navigation Section */}
      <nav>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            margin: 0,
            padding: 0,
            marginLeft: '722px',
          }}
        >
          <li>
            <a href="#" style={linkStyle}>
              Home
            </a>
          </li>
          <li>
            <a href="#" style={linkStyle}>
              Our Services
            </a>
          </li>
          <li>
            <a href="#" style={linkStyle}>
              Blog
            </a>
          </li>
          <li>
            <a href="#" style={linkStyle}>
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" style={linkStyle}>
              About Us
            </a>
          </li>
        </ul>
      </nav>

      {/* Search and Button Section */}
      <div
        className="d-flex align-items-center"
        style={{ gap: '20px', marginRight: '115px' }}
      >
        <i
          className="fas fa-search"
          style={{
            fontSize: '18px',
            color: '#333',
            cursor: 'pointer',
          }}
        ></i>
        <button
          style={{
            backgroundColor: '#f57c00',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '8px 16px',
            cursor: 'pointer',
          }}
        >
          Talk An Expert
        </button>
      </div>
    </div>
  );
};

export default HeaderMenu;
