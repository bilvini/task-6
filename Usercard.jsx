import React, { Component } from 'react';

class UserCard extends Component {
  render() {
    const { name, location } = this.props; // Destructure props

    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
        <h2>{name}</h2>
        <p>Location: {location}</p>
      </div>
    );
  }
}

export default UserCard;
