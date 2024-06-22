// components/Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Home() {
    const { name } = useParams();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3006/api/categories')
            .then(response => response.json())
            .then(data => setCategories(data.categories))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return (
        <div>
            <h1><a href="/">Categories</a></h1>
            <ul >
                {categories.map(category => (
                    <li className='list-none' key={category.name}>
                        <Link to={`/category/${category.name}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>

           { !name  ? ( <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {categories.map(category => (
                    <div key={category.name} >
                        <div >
                            {category.cards.map(card => (
                                <div key={card.id} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', width: '200px' }}>
                                    <img src={card.image_url} alt={card.title} style={{ width: '100%' }} />
                                    <h3 >{card.title}</h3>
                                    <p>Views: {card.views}</p>
                                    <p>Likes: {card.likes}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>) : (
                <div></div>
            )

           }
        </div>
    );
}

export default Home;
