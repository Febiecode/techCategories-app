// components/Category.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Home from './Home';

function Category() {
  const { name } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3006/api/categories`)
      .then(response => response.json())
      .then(data => {
        const foundCategory = data.categories.find(cat => cat.name === name);
        setCategory(foundCategory);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching category:', error);
        setLoading(false);
      });
  }, [name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div>
      <Home />
      <h1>{category.name}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {category.cards.map(card => (
          <div key={card.id} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={card.image_url} alt={card.title} style={{ width: '100%' }} />
            <h2>{card.title}</h2>
            <p>Views: {card.views}</p>
            <p>Likes: {card.likes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
