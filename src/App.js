import React from 'react';
import { useEffect } from "react";
import './static/styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './pages/Categories';
import Carousel from './pages/Carousel';
import { frames } from './sketch';
// import SampleCardComponent from './components/SampleCardComponent';

import Stack from 'react-bootstrap/Stack';

function App() {
  // const sampleCardText1 = "To go to the Categories page, add \"/categories\" to the end of the url."
  // const sampleCardText2 = "To go to the Carousel page, add \"/carousel\" to the end of the url."

  useEffect(() => {
    frames.start()
    console.log("component mounted")
  }, []);
  
  return (
    <Stack style={{height: '100vh', 'width': '100vw'}}>
      <Router>
        <Routes>
          <Route path="/categories" element={<Categories />} />
          <Route path="/carousel/:category" element={<Carousel />} />
        </Routes>
      </Router>
      {/* <SampleCardComponent text={sampleCardText1} /> */}
      {/* <SampleCardComponent text={sampleCardText2} /> */}
    </Stack>
  );
}

export default App;
