import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './pages/category';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
