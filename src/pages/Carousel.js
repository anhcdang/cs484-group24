import React from 'react';
import UncontrolledCarousel from '../components/UncontrolledCarousel';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from 'react-router-dom';
import { ACADEMIC_EVENTS, ARTS_EVENTS, CULTURAL_EVENTS, MOCK_EVENTS, MUSIC_EVENTS} from '../models/Event';


const ACADEMICS = 'Academics'
const MUSIC = 'Music'
const CULTURAL = 'Cultural'
const ARTS = 'Arts'

function Carousel() {
  const navigate = useNavigate();
  const { category } = useParams();
  console.log(category);

  // TODO: is there a better way to implement this?
  const getCategoryEvents = () => {
    switch(category) {
     
      case ACADEMICS:
        return ACADEMIC_EVENTS
      case MUSIC:
        return MUSIC_EVENTS
      case CULTURAL:
        return CULTURAL_EVENTS
      case ARTS:
        return ARTS_EVENTS
      default:
        return MOCK_EVENTS
    } 
  }

  const handleGoBack = () => {
    navigate('/categories');
  }

  return (       
    <Stack>
      <div
        className='carousel-container'        
      >
       <UncontrolledCarousel events={getCategoryEvents()} />
      </div>
      <div
        className='bottom-page-container'
      >
        <Button className='top-right-quarter-circle-button' size='lg' onClick={handleGoBack}>Go Back</Button>
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
