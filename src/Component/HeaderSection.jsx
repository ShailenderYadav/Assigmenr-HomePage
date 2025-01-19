import React from 'react';
import workingMan from '../image/workMan2.jpeg';
import '../Css/HeaderSection.css';

const HeaderSection = () => {
  const floatingButtonStyle = {
    display: 'block',
    margin: '10px 0',
    padding: '10px 15px',
    backgroundColor: '#f57c00',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '14px',
    textAlign: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '40px',
        background: 'linear-gradient(to right, #fff 50%, #f7f9fc 50%)',
        minHeight: '500px',
      }}
    >
      {/* Left Section */}
      <div style={{ flex: 1, paddingRight: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <span
            style={{ fontSize: '16px', color: '#f57c00', fontWeight: 'bold' }}
          >
            ★ Google Rating
          </span>
          <span style={{ marginLeft: '8px', fontSize: '14px', color: '#555' }}>
            ★★★★★
          </span>
        </div>
        <h1
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#1C4670',
          }}
        >
          Your trusted partner for compliance business needs
        </h1>
        <p
          style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '20px',
          }}
        >
          An online business compliance platform that helps entrepreneurs and
          other individuals with various
          <strong> registrations, tax filings</strong>, and other{' '}
          <strong>legal matters</strong>.
        </p>

        {/* Rating and Info */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginBottom: '20px',
            alignItems: 'center',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ margin: 0, color: '#f57c00' }}>4.5+</h3>
            <p style={{ margin: 0, fontSize: '12px', color: '#555' }}>
              Customer Rating
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ margin: 0, color: '#f57c00' }}>20,000+</h3>
            <p style={{ margin: 0, fontSize: '12px', color: '#555' }}>
              Clients
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ margin: 0, color: '#f57c00' }}>99.8%</h3>
            <p style={{ margin: 0, fontSize: '12px', color: '#555' }}>
              Financial Stability
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '20px' }}>
          <button
            style={{
              backgroundColor: '#f57c00',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Talk An Expert
          </button>
          <button
            style={{
              backgroundColor: 'transparent',
              color: '#f57c00',
              border: '2px solid #f57c00',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            See how it works
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div style={{ flex: 1, position: 'relative' }}>
        <img
          src={workingMan}
          alt="work-man"
          style={{
            width: '100%',
            maxHeight: '400px',
            objectFit: 'contain',
          }}
        />
        {/* Floating Buttons */}
        <div style={{ position: 'absolute', top: '20%', right: '20px' }}>
          <button style={floatingButtonStyle}>Annual Compliance</button>
          <button style={floatingButtonStyle}>Payroll Services</button>
          <button style={floatingButtonStyle}>Company Formation</button>
          <button style={floatingButtonStyle}>Tax Filings</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
