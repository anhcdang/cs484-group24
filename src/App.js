import React from 'react';
import './styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './pages/Categories';
import Carousel from './pages/Carousel';

import SampleCardComponent from './components/SampleCardComponent';

function App() {
  const sampleCardText1 = "To go to the Categories page, add \"/categories\" to the end of the url."
  const sampleCardText2 = "To go to the Carousel page, add \"/carousel\" to the end of the url."

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/categories" element={<Categories />} />
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
      </Router>
      <SampleCardComponent text={sampleCardText1} />
      <SampleCardComponent text={sampleCardText2} />
    </div>
  );
}

export default App;
