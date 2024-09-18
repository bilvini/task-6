import React from 'react';

function PersonalizedMessage() {
  const name = 'Your Name'; // Replace 'Your Name' with your actual name

  // Function to return a personalized greeting
  const getGreeting = () => {
    return `Hello, ${name}!`;
  };

  return (
    <div>
      <h2>{getGreeting()}</h2>
    </div>
  );
}

export default PersonalizedMessage;
