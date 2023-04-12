import Carousel from 'react-bootstrap/Carousel';
import SampleEvent1 from '../static/images/sample-event-images/sample-event-1.png';
import SampleEvent2 from '../static/images/sample-event-images/sample-event-2.png';
import SampleEvent3 from '../static/images/sample-event-images/sample-event-3.png';

function UncontrolledCarousel() {
  return (
    <Carousel
      className='carousel'
      variant="dark"
    >
      <Carousel.Item>
        <img
          src={SampleEvent1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={SampleEvent2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={SampleEvent3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledCarousel;
