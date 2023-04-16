import Carousel from 'react-bootstrap/Carousel';
import { events } from "../components/Event";
import React from "react";


// Version using event object model
function UncontrolledCarousel() {
  return (
    <Carousel className="carousel" variant="dark">
      {events.map((event, index) => (
        <Carousel.Item key={index}>
          <img src={event.image} alt={event.title} />
          <Carousel.Caption>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledCarousel;

//Hard coded version:

// function UncontrolledCarousel({ slides }) {
//   return (
//     <Carousel className="carousel" variant="dark">
//       {slides.map((slide, index) => (
//         <Carousel.Item key={index}>
//           <img src={slide.src} alt={slide.alt} />
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// }

// const slides = [
//   { src: SampleEvent1, alt: "First slide" },
//   { src: SampleEvent2, alt: "Second slide" },
//   { src: SampleEvent3, alt: "Third slide" },
// ];

// export default UncontrolledCarousel;
// export { slides };





