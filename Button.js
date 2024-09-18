import React from 'react';

function Button({ text, color }) {
  return (
    <button style={{
      backgroundColor: color,
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      margin: '5px'
    }}>
      {text}
    </button>
  );
}

export default Button;
