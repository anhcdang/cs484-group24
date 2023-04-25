import Carousel from 'react-bootstrap/Carousel';
import React from "react";


// Version using event object model
function UncontrolledCarousel(props) {
  return (
    <Carousel className="carousel" variant="dark" activeIndex={props.index} controls={false}>
      {props.events.map((event, index) => (
        <Carousel.Item key={index} style={{backgroundColor: event.color}}>
          {/* <img src={event.image} alt={event.title} /> */}
          <Carousel.Caption style={{padding: "10rem"}}>
          <h3 style={{ fontSize: '3rem' }}>{props.category + ": " + event.title}</h3>
            <p style={{fontSize: "18px"}}>{event.date.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}</p>
            <p style={{fontSize: "18px"}}>{event.location}</p>
            <p style={{fontSize: "20px"}}>{event.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledCarousel;





