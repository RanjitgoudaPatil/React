import React, { useState } from 'react';
import './ConditionalPage.css';

const ConditionalPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleErrorToggle = () => {
    setHasError(!hasError);
  };

  return (
    <div className="conditional-container">
      <h2>Conditional Rendering with Ternary Operator</h2>

      <div className="status-section">
        <h3>Login Status:</h3>
        <p>{isLoggedIn ? 'You are logged in!' : 'You are not logged in.'}</p>
        <button onClick={handleLoginToggle}>
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </button>
      </div>

      <div className="status-section">
        <h3>Error Status:</h3>
        <p>{hasError ? 'There was an error!' : 'Everything is fine!'}</p>
        <button onClick={handleErrorToggle}>
          {hasError ? 'Clear Error' : 'Simulate Error'}
        </button>
      </div>

      <div className={`message-box ${hasError ? 'error' : 'success'}`}>
        {hasError ? (
          <p>Oops, something went wrong. Please try again!</p>
        ) : (
          <p>Everything looks good! You can continue.</p>
        )}
      </div>
    </div>
  );
};

export default ConditionalPage;
