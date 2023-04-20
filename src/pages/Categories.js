import React, {useCallback, useEffect, useMemo} from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/styles.css';
import sample_img1 from '../static/images/sample-category-images/sample1.png';
import sample_img2 from '../static/images/sample-category-images/sample2.jpeg';
import sample_img3 from '../static/images/sample-category-images/sample3.jpeg';
import sample_img4 from '../static/images/sample-category-images/sample4.jpeg';
// import Carousel from './Carousel.js';
import { useNavigate} from 'react-router-dom';
import { frames } from '../sketch';

const UPPER_LEFT = "UPPER LEFT"
const LOWER_LEFT = "LOWER LEFT"
const UPPER_RIGHT = "UPPER RIGHT"
const LOWER_RIGHT = "LOWER RIGHT"



function Categories() {
  const navigate = useNavigate();
  const cards = useMemo(
    () => [
      { category_type_id: 1, title: 'Academics', src: sample_img1 },
      { category_type_id: 2, title: 'Music', src: sample_img2 },
      { category_type_id: 3, title: 'Cultural', src: sample_img3 },
      { category_type_id: 4, title: 'Arts', src: sample_img4 },
    ],
    []
  );

  const handleCardClick = useCallback((request_type_id) => {
    const category = cards[request_type_id - 1].title;
    navigate(`/carousel/${category}`);
  }, [cards, navigate]);

  const sendWristCommand = useCallback((command) => {
    switch (command) {
      case UPPER_LEFT:
        console.log(UPPER_LEFT);
        handleCardClick(1);
        break;
      case LOWER_LEFT:
        console.log(LOWER_LEFT);
        handleCardClick(3);
        break;
      case UPPER_RIGHT:
        console.log(UPPER_RIGHT);
        handleCardClick(2);
        break;
      case LOWER_RIGHT:
        console.log(LOWER_RIGHT);
        handleCardClick(4);
        break;
      default:
        break;
    }
  }, [handleCardClick]);

  useEffect(() => {
    frames
      .start()
      .then((command) => {
        sendWristCommand(command);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [sendWristCommand]);



  return (
    <div>
    <div className='center-text-container'>
          <h1>Categories</h1>
          <p>Move hand to a category card to view events.</p>
        </div>
    <div className="category-container-fluid">
      <div className="row row-cols-2">
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
