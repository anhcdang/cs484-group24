// import SampleEvent1 from '../static/images/sample-event-images/sample-event-1.png';
// import SampleEvent2 from '../static/images/sample-event-images/sample-event-2.png';
// import SampleEvent3 from '../static/images/sample-event-images/sample-event-3.png';

const SampleEvent1 = 'https://cdn.shopify.com/s/files/1/0550/0354/5750/products/DCEDBB_600x.png?v=1614620713';
const SampleEvent2 = 'https://cdn.shopify.com/s/files/1/0476/2238/9921/products/F8E3E8_grande.png?v=1617660540';
const SampleEvent3 = 'https://cdn.shopify.com/s/files/1/1057/4058/products/AlphakrylikBabyBlue_2000x.png?v=1626842229';

const PASTEL_GREEN_HEX = "#e2efc7"
const PASTEL_PINK_HEX = "#fae9ed"
const PASTEL_BLUE_HEX = "#c6e0f0"

export default class Event {
    constructor(title, date, location, image, description, color) {
      this.title = title;
      this.date = date;
      this.location = location;
      this.image = image;
      this.description = description;
      this.color = color;
    }
  }

  export const MOCK_EVENTS = [  
    new Event(
      'Event 1',
      new Date(2023, 4, 1),
      'Location 1',
      SampleEvent1,
      'Description of Event 1',
      PASTEL_GREEN_HEX
    ),
    new Event(
      'Event 2',
      new Date(2023, 4, 8),
      'Location 2',
      SampleEvent2,
      'Description of Event 2',
      PASTEL_PINK_HEX
    ),
    new Event(
      'Event 3',
      new Date(2023, 4, 15),
      'Location 3',
      SampleEvent3,
      'Description of Event 3',
      PASTEL_BLUE_HEX
    ),
  ];



export const ACADEMIC_EVENTS = [  
  new Event(
    'Chess Club',
    new Date(2023, 4, 1),    
    'LC 209',
    SampleEvent1,
    'Join us for a night of strategy and skill at our chess club event! Whether you are a beginner or a seasoned pro, you will love the challenge of this classic game.',
    PASTEL_GREEN_HEX
  ),
  new Event(
    'Academic Decathalon',
    new Date(2023, 4, 8),
    'WLH 115',
    SampleEvent2,
    'Put your knowledge to the test at our academic decathlon! Join us for a day of competition and fun as we challenge teams to excel in a variety of subjects.',
    PASTEL_PINK_HEX
  ),
  new Event(
    'Trivia',
    new Date(2023, 4, 15),
    'Davies Auditorium',
    SampleEvent3,
    'Put your knowledge to the test at our trivia night! Join us for a fun and friendly competition as we challenge teams to answer questions across a wide range of topics.',
    PASTEL_BLUE_HEX
  ),
];



export const MUSIC_EVENTS = [  
  new Event(
    'Salsa Dancing',
    new Date(2023, 4, 1),
    'Ninth Square',
    SampleEvent1,
    'Get ready to heat up the dance floor with our salsa dancing event! Whether you are a seasoned dancer or just starting out, you will love the vibrant energy and infectious rhythms of this Latin-inspired dance style.',
    PASTEL_GREEN_HEX
  ),
  new Event(
    'Karaoke',
    new Date(2023, 4, 8),
    'Davies Auditorium',
    SampleEvent2,
    'Get ready to unleash your inner superstar! Join us for a night of karaoke, where you can sing your heart out to all your favorite songs. This event is perfect for anyone who loves to sing, dance, or just have a good time.',
    PASTEL_PINK_HEX
  ),
  new Event(
    'Acapella Performance',
    new Date(2023, 4, 15),
    'SSS',
    SampleEvent3,
    'Come and experience the magic of live music with our talented a cappella group! Get ready to be blown away by the vocal harmonies and dynamic performances of our singers as they take you on a musical journey through popular hits and classics. Join us for a night of unforgettable entertainment and great music!',
    PASTEL_BLUE_HEX
  ),
];

export const CULTURAL_EVENTS = [  
  new Event(
    'Asian Pacific American Heritage Month Festival',
    new Date(2023, 4, 1),
    'Old Campus',
    SampleEvent1,
    'This festival celebrates the rich and diverse cultures, histories, and contributions of Asian Pacific Americans through performances, exhibits, workshops, and interactive activities.',
    PASTEL_GREEN_HEX
  ),
  new Event(
    'Multicultural Fair',
    new Date(2023, 4, 8),
    'Lanman Center',
    SampleEvent2,
    'The multicultural event celebrates diversity and promotes cultural exchange through food, music, dance, and art from a variety of countries and traditions.',
    PASTEL_PINK_HEX
  ),
  new Event(
    'Diversity Dialogue',
    new Date(2023, 4, 15),
    'Yale Law School',
    SampleEvent3,
    'The diversity dialogue event provides a safe and open space for students, faculty, and staff to engage in honest and respectful discussions about cultural issues and differences, promoting mutual understanding and appreciation.',
    PASTEL_BLUE_HEX
  ),
];

export const ARTS_EVENTS = [  
  new Event(
    'Film Festival',
    new Date(2023, 4, 1),
    'Yale British Art Gallery',
    SampleEvent1,
    'The film festival features a selection of independent, international, and classic films that showcase diverse genres, cultures, and perspectives, inviting the audience to engage in film theory and production discussions with filmmakers and industry professionals.',
    PASTEL_GREEN_HEX
  ),
  new Event(
    '"Lost and Found" Theater Production',
    new Date(2023, 4, 8),
    'Yale Repertory Theater',
    SampleEvent2,
    'The play follows the journey of a young woman named Maya, who embarks on a quest for self-discovery and encounters a diverse group of characters along the way.',
    PASTEL_PINK_HEX
  ),
  new Event(
    '"Reflections on Nature"',
    new Date(2023, 4, 15),
    'Location 3',
    SampleEvent3,
    '"Reflections on Nature" is an exhibition showcasing the work of local and national artists who use a variety of media to depict the beauty and fragility of the natural world.',
    PASTEL_BLUE_HEX
  ),
];
