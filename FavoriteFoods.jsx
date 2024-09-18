import React from 'react';

function FavoriteFoods() {
  const foods = ['Pizza', 'Sushi', 'Tacos', 'Ice Cream', 'Burgers'];

  return (
    <div>
      <h2>Favorite Foods:</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteFoods;
