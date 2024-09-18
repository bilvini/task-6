import React from 'react';

function UserProfile({ name, age, location }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px',
      maxWidth: '300px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    }}>
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
}

// Set default props
UserProfile.defaultProps = {
  location: 'Unknown',
};

export default UserProfile;
