import React from 'react';

function ComplexComponent() {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1>Welcome to My Page</h1>
        <h2>Your daily updates</h2>
      </header>
      <section style={{ marginBottom: '20px' }}>
        <p>This section contains some important information about our services.</p>
        <ul>
          <li>Service 1: Description of service 1.</li>
          <li>Service 2: Description of service 2.</li>
          <li>Service 3: Description of service 3.</li>
        </ul>
      </section>
      <footer>
        <p>&copy; 2024 My Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ComplexComponent;
