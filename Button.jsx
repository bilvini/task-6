import React from 'react';

function Button({ label, onClick }) {
  return (
    <button onClick={onClick} style={{ margin: '5px', padding: '10px', cursor: 'pointer' }}>
      {label}
    </button>
  );
}

export default Button;
