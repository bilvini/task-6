import React from 'react';

function ContactCard({ contact }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px',
      maxWidth: '300px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    }}>
      <h3>Contact Information</h3>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Address:</strong> {contact.address}</p>
    </div>
  );
}

export default ContactCard;
