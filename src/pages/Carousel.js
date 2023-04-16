import React from 'react';
import UncontrolledCarousel from '../components/UncontrolledCarousel';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { events } from '../components/Event';
//import { slides } from '../components/UncontrolledCarousel';


//<UncontrolledCarousel slides={slides} />
function Carousel() {
  const { category } = useParams();
  console.log(category);
  return (       
    <Stack>
      <div
        className='carousel-container'        
      >
       
       <UncontrolledCarousel slides={events.map(event => ({src: event.image, alt: event.title}))} />
      </div>
      <div
        className='bottom-page-container'
      >
        <Button className='top-right-quarter-circle-button' size='lg'>Go Back</Button>
        <div className='center-text-container'>
          <p>Use your hand to swipe through the cards.</p>
          <p>Move hand to “Go Back”</p>
        </div>
        <Button className='top-left-quarter-circle-button' size='lg'>View this event</Button>
      </div>
    </Stack>
  );
}

export default Carousel;
