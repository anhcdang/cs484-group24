import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/styles.css';
import sample_img from '../static/images/sample.png';
// import Carousel from './Carousel.js';
import { useNavigate } from 'react-router-dom';

function Categories() {
  const navigate = useNavigate();
  const cards = [
    { category_type_id: 1, title: 'Social', src: sample_img },
    { category_type_id: 2, title: 'Academics', src: sample_img },
    { category_type_id: 3, title: 'Sports', src: sample_img },
    { category_type_id: 4, title: 'Music', src: sample_img },
    { category_type_id: 5, title: 'Cultural', src: sample_img},
    { category_type_id: 6, title: 'Arts', src: sample_img },
  ];

  const handleCardClick = (request_type_id) => {
      const category = cards[request_type_id-1].title;
      navigate(`/carousel/${category}`);

  };

  return (
    <div>
    <div className='center-text-container'>
          <h1>Categories</h1>
          <p>Move hand to a category card to view events.</p>
        </div>
    <div className="category-container-fluid">
      <div className="row row-cols-3">
        {cards.map((card) => (
          <div key={card.category_type_id} className="col">
            <Card onClick={() => handleCardClick(card.category_type_id)}>
              <Card.Img variant="top" src={card.src} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}



export default Categories;
