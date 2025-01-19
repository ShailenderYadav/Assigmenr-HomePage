import React from 'react';
import '../Css/TrustedBy.css';
import oracleLogo from '../image/oracleImg.png';
import Morpheus from '../image/Morpheus.png';
import monday from '../image/monday.png';
import samsung from '../image/samsung.png';
import segmentImg from '../image/segment.jpeg';

const TrustedBySection = () => {
  return (
    <div className="trusted-by-section">
      <h3 className="trusted-by-title">
        Trusted By Over 100+ Startups and Freelance Businesses
      </h3>
      <div className="logo-container">
        <img src={oracleLogo} alt="Oracle" className="logo" />
        <img src={Morpheus} alt="Morpheus" className="logo" />
        <img src={Morpheus} alt="Morpheus" className="logo" />
        <img src={samsung} alt="Samsung" className="logo" />
        <img src={monday} alt="Monday.com" className="logo" />
        <img src={segmentImg} alt="Segment" className="logo" />
      </div>
    </div>
  );
};

export default TrustedBySection;
