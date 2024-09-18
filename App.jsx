import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Profile from './Profile';
import UserCard from './UserCard';
import Content from './Content';
import FavoriteFoods from './FavoriteFoods';
import Greeting from './Greeting';
import Button from './Button';
import Counter from './Counter';
import ComplexComponent from './ComplexComponent';
import PersonalizedMessage from './PersonalizedMessage';
import DateTime from './DateTime';
import Welcome from './Welcome';
import UserProfile from './UserProfile';
import ContactCard from './ContactCard';
import ShoppingCart from './ShoppingCart'; // Import the ShoppingCart component

function App() {
  // Array of names
  const names = ['Thanu', 'Bhavi', 'Chathu', 'Joe', 'Steve'];

  const handleButtonClick = (name) => {
    alert(`Button clicked for ${name}`);
  };

  // Sample contact object
  const contact = {
    email: 'example@example.com',
    phone: '7688992753',
    address: '123 Main , oldtown, Atp',
  };

  // Sample product array
  const products = ['Apples', 'Bananas', 'Oranges', 'Grapes', 'Mangoes'];

  return (
    <div>
      <Header />

      <main style={{ padding: '20px' }}>
        <Greeting />
        <Content />
        
        <h1 style={{ color: 'blue' }}>Welcome to React!</h1>
        <div>
          React is a JavaScript library for building user interfaces.
        </div>

        <h2>List of Names:</h2>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>

        {/* Render the Profile component with props */}
        <Profile name="Thanu" age={30} />
        <Profile name="Bhavi" age={25} />
        
        {/* Render UserCard components */}
        <UserCard name="Thanu" location="Banglore" />
        <UserCard name="Bhavi" location="ATP" />

        {/* Render FavoriteFoods component */}
        <FavoriteFoods />

        {/* Render the Counter component */}
        <Counter />

        {/* Render the ComplexComponent */}
        <ComplexComponent />

        {/* Render the PersonalizedMessage component */}
        <PersonalizedMessage />

        {/* Render the DateTime component */}
        <DateTime />

        {/* Render the Welcome component three times with different names */}
        <Welcome name="Thanu" />
        <Welcome name="Bhavi" />
        <Welcome name="Chathu" />

        {/* Render the UserProfile component */}
        <UserProfile name="Thanu" age={30} location="Banglore" />
        <UserProfile name="Bhavi" age={25} location="Atp" />
        <UserProfile name="Chathu" age={28} location="Madanapalle" />

        {/* Render the ContactCard component */}
        <ContactCard contact={contact} /> {/* Pass the contact object */}

        {/* Render the ShoppingCart component */}
        <ShoppingCart products={products} /> {/* Pass the products array */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
