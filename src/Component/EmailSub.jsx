import React from 'react';
import '../Css/EmailSub.css';

const EmailSub = () => {
  return (
    <div className="screen-container">
      <div className="header">1% OF THE INDUSTRY</div>
      <h1>Welcome to your new digital reality. Now.</h1>
      <div className="input-container">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="email-input"
        />
        <button className="submit-button">Submit</button>
      </div>
      <div className="features">
        <span>&#10003; Instant results</span>
        <span>&#10003; User-friendly interface</span>
        <span>&#10003; Personalized customization</span>
      </div>
    </div>
  );
};

export default EmailSub;
