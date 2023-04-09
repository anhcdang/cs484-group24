import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './pages/Categories';
import Carousel from './pages/Carousel';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/categories" element={<Categories />} />
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
