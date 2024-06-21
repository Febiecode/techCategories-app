import React, { useEffect, useState } from 'react';

const TechCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3006/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {categories.map(category => (
        <div key={category.name}>
          <h2>{category.name}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {category.cards.map(card => (
              <div key={card.id} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', width: '200px' }}>
                <img src={card.image_url} alt={card.title} style={{ width: '100%' }} />
                <h3>{card.title}</h3>
                <p>Views: {card.views}</p>
                <p>Likes: {card.likes}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechCategories;
