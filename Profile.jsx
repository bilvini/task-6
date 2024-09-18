import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const { name, age } = this.props; // Destructure props

    return (
      <div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
      </div>
    );
  }
}

export default Profile;
