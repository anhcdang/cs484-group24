import React from 'react';
import ControlledCarousel from '../components/ControlledCarousel';

import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

function Carousel() {

  return (
    <Stack>
      <div
        className='carousel-container'
      >

      </div>
      <div
        className='bottom-page-container'
      >
        <Button className='top-right-quarter-circle-button' size='lg' variant='secondary'>Go Back</Button>
        <div className='center-text-container'>
          <p>Use your hand to swipe through the cards.</p>
          <p>Move hand to “Go Back”</p>
        </div>
        <Button className='top-left-quarter-circle-button' size='lg' variant='primary'>View this event</Button>
      </div>
    </Stack>
  );
}

export default Carousel;
