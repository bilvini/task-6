import React from 'react';

function DateTime() {
  const now = new Date(); // Get the current date and time

  // Format date and time
  const formattedDateTime = now.toLocaleString();

  return (
    <div>
      <h2>Current Date and Time:</h2>
      <p>{formattedDateTime}</p>
    </div>
  );
}

export default DateTime;
