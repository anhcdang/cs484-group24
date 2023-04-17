import SampleEvent1 from '../static/images/sample-event-images/sample-event-1.png';
import SampleEvent2 from '../static/images/sample-event-images/sample-event-2.png';
import SampleEvent3 from '../static/images/sample-event-images/sample-event-3.png';

export default class Event {
    constructor(title, date, location, image, description) {
      this.title = title;
      this.date = date;
      this.location = location;
      this.image = image;
      this.description = description;
    }
  }

  export const MOCK_EVENTS = [  
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

export const SOCIAL_EVENTS = [  
  new Event(
    'Social Event 1',
    new Date(2023, 4, 1),
    'Location 1',
    SampleEvent1,
    'Description of Social Event 1'
  ),
  new Event(
    'Social Event 2',
    new Date(2023, 4, 8),
    'Location 2',
    SampleEvent2,
    'Description of Social Event 2'
  ),
  new Event(
    'Social Event 3',
    new Date(2023, 4, 15),
    'Location 3',
    SampleEvent3,
    'Description of Social Event 3'
  ),
];

export const ACADEMIC_EVENTS = [  
  new Event(
    'Academics Event 1',
    new Date(2023, 4, 1),
    'Location 1',
    SampleEvent1,
    'Description of Academics Event 1'
  ),
  new Event(
    'Academics Event 2',
    new Date(2023, 4, 8),
    'Location 2',
    SampleEvent2,
    'Description of Academics Event 2'
  ),
  new Event(
    'Academics Event 3',
    new Date(2023, 4, 15),
    'Location 3',
    SampleEvent3,
    'Description of Academics Event 3'
  ),
];

export const SPORTS_EVENTS = [  
  new Event(
    'Sports Event 1',
    new Date(2023, 4, 1),
    'Location 1',
    SampleEvent1,
    'Description of Social Event 1'
  ),
  new Event(
    'Sports Event 2',
    new Date(2023, 4, 8),
    'Location 2',
    SampleEvent2,
    'Description of Sports Event 2'
  ),
  new Event(
    'Sports Event 3',
    new Date(2023, 4, 15),
    'Location 3',
    SampleEvent3,
    'Description of Sports Event 3'
  ),
];

export const MUSIC_EVENTS = [  
  new Event(
    'Music Event 1',
    new Date(2023, 4, 1),
    'Location 1',
    SampleEvent1,
    'Description of Music Event 1'
  ),
  new Event(
    'Music Event 2',
    new Date(2023, 4, 8),
    'Location 2',
    SampleEvent2,
    'Description of Music Event 2'
  ),
  new Event(
    'Music Event 3',
    new Date(2023, 4, 15),
    'Location 3',
    SampleEvent3,
    'Description of Music Event 3'
  ),
];

export const CULTURAL_EVENTS = [  
  new Event(
    'Cultural Event 1',
    new Date(2023, 4, 1),
    'Location 1',
    SampleEvent1,
    'Description of Cultural Event 1'
  ),
  new Event(
    'Cultural Event 2',
    new Date(2023, 4, 8),
    'Location 2',
    SampleEvent2,
    'Description of Cultural Event 2'
  ),
  new Event(
    'Cultural Event 3',
    new Date(2023, 4, 15),
    'Location 3',
    SampleEvent3,
    'Description of Cultural Event 3'
  ),
];

export const ARTS_EVENTS = [  
  new Event(
    'Arts Event 1',
    new Date(2023, 4, 1),
    'Location 1',
    SampleEvent1,
    'Description of Arts Event 1'
  ),
  new Event(
    'Arts Event 2',
    new Date(2023, 4, 8),
    'Location 2',
    SampleEvent2,
    'Description of Arts Event 2'
  ),
  new Event(
    'Arts Event 3',
    new Date(2023, 4, 15),
    'Location 3',
    SampleEvent3,
    'Description of Arts Event 3'
  ),
];
