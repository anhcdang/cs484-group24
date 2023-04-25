import React, { useEffect, useState, useCallback } from 'react';
import UncontrolledCarousel from '../components/UncontrolledCarousel';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from 'react-router-dom';
import { frames } from '../sketch';
import { ACADEMIC_EVENTS, ARTS_EVENTS, CULTURAL_EVENTS, MOCK_EVENTS, MUSIC_EVENTS} from '../models/Event';

const UP = "UP"
const DOWN = "DOWN"
const ACADEMICS = 'Academics'
const MUSIC = 'Music'
const CULTURAL = 'Cultural'
const ARTS = 'Arts'

const UPPER_LEFT = "UPPER LEFT"
const LOWER_LEFT = "LOWER LEFT"
const UPPER_RIGHT = "UPPER RIGHT"
const LOWER_RIGHT = "LOWER RIGHT"

function Carousel() {  
  const [index, setIndex] = useState(0);
  const [events, setEvents] = useState(MOCK_EVENTS);


  const navigate = useNavigate();
  const { category } = useParams();
  // console.log(category);

  // TODO: is there a better way to implement this?
  const getCategoryEvents = () => {
    switch(category) {
     
      case ACADEMICS:
        // return ACADEMIC_EVENTS
        setEvents(ACADEMIC_EVENTS)
        break;
      case MUSIC:
        // return MUSIC_EVENTS
        setEvents(MUSIC_EVENTS)
        break;
      case CULTURAL:
        // return CULTURAL_EVENTS
        setEvents(CULTURAL_EVENTS)
        break;
      case ARTS:
        // return ARTS_EVENTS
        setEvents(ARTS_EVENTS)
        break;
      default:
        // return MOCK_EVENTS
        setEvents(MOCK_EVENTS)
        break;
    } 
  }

  const onPrevClick = useCallback(() => {
    if (index === 0) {
      setIndex(events.length - 1)
    } else {
      setIndex(index - 1)
    }
  }, [events.length, index]);

  const onNextClick = useCallback(() => {
    if (index === events.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }, [events.length, index]);

  const handleGoBack = useCallback(() => {
    navigate('/categories');
  }, [navigate]);

  const sendWristCommand = useCallback((command) => {
    switch (command) {
      case UPPER_LEFT:
        console.log(UPPER_LEFT);
        onPrevClick();
        break;
      case LOWER_LEFT:
        console.log(LOWER_LEFT);
        // handleGoBack();
        break;
      case UPPER_RIGHT:
        console.log(UPPER_RIGHT);
        onNextClick();
        break;
      case LOWER_RIGHT:
        console.log(LOWER_RIGHT);
        break;
      case UP:
        handleGoBack();
        console.log(UP);
        break;
      case DOWN:
        console.log(DOWN);
      break;
      default:
        break;
    }
  }, [onPrevClick, handleGoBack, onNextClick]);

  useEffect(() => {
    getCategoryEvents();
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      // do something 1 sec after clicked has changed
      frames.start()
   }, 2000);
   return () => clearTimeout(timer);
  })

  useEffect(() => {
    setInterval(() => {
      sendWristCommand(frames.command)
    }, 1000);
  },[sendWristCommand])

  // useEffect(() => {
  //   frames
  //     .start()
  //     .then((command) => {
  //       sendWristCommand(command);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // });

  return (       
    <Stack>
      <div className='top-page-container'>
        <Button className='go-back-button' size='lg' onClick={handleGoBack}>Go Back</Button>
      </div>
      <div className='carousel-container'>
       <UncontrolledCarousel category={category} events={events} index={index} />
      </div>
      <div className='bottom-page-container'>
        {/* <Button className='top-right-quarter-circle-button' size='lg' onClick={handleGoBack}>Go back</Button> */}
        <div className='center-text-container'>
          <p>Wave your right hand to the upper left/upper right ARROWS to browse through the carousel.</p>
          <p>Wave your right hand to the lower left GREEN button to go back.</p>
        </div>
      </div>
    </Stack>
  );
}

export default Carousel;
