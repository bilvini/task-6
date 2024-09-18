import React from 'react';

function Greeting() {
  const currentHour = new Date().getHours(); // Get the current hour
  let greetingMessage;

  // Determine the greeting based on the current hour
  if (currentHour < 12) {
    greetingMessage = "Good Morning!";
  } else if (currentHour < 18) {
    greetingMessage = "Good Afternoon!";
  } else {
    greetingMessage = "Good Evening!";
  }

  return (
    <div>
      <h2>{greetingMessage}</h2>
    </div>
  );
}

export default Greeting;
