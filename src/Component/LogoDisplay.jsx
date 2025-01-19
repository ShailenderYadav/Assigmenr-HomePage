import React from 'react';
import '../Css/LogoDisplay.css';
import zoom from '../image/zoom.png';
import spotify from '../image/spotify.jpeg';
import slack from '../image/slack.png';
import dropbox from '../image/dropbox.jpeg';
import coinbase from '../image/coinbase.png';
import webflow from '../image/webflow.png';

const LogoDisplay = () => {
  return (
    <div className="logo-container">
      <img src={coinbase} alt="Coinbase" className="logo" />
      <img src={spotify} alt="Spotify" className="logo" />
      <img src={slack} alt="Slack" className="logo" />
      <img src={dropbox} alt="Dropbox" className="logo" />
      <img src={webflow} alt="Webflow" className="logo" />
      <img src={zoom} alt="Zoom" className="logo" />
    </div>
  );
};

export default LogoDisplay;
