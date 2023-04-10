import React from 'react';
import ControlledCarousel from '../components/ControlledCarousel';

function Carousel() {
  const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    { id: 4, name: 'Category 4' },
  ];

  return (
    <div>
      <h1>Carousel</h1>
      Hello World.
      <ControlledCarousel />
    </div>
  );
}

export default Carousel;
