import SampleEvent1 from '../static/images/sample-event-images/sample-event-1.png';
import SampleEvent2 from '../static/images/sample-event-images/sample-event-2.png';
import SampleEvent3 from '../static/images/sample-event-images/sample-event-3.png';

export default class Event {
    constructor(title, date, location, image, description) {
      this.title = title;
      this.location = location;
      this.image = image;
      this.description = description;
    }
  }
  

  export const events = [  
    new Event(
      'Event 1',
      new Date(2023, 4, 1),
      'Location 1',
      SampleEvent1,
      'Description of Event 1'
    ),
    new Event(
      'Event 2',
      new Date(2023, 4, 8),
      'Location 2',
      SampleEvent2,
      'Description of Event 2'
    ),
    new Event(
      'Event 3',
      new Date(2023, 4, 15),
      'Location 3',
      SampleEvent3,
      'Description of Event 3'
    ),
  ];

//export default events;
