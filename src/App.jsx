import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardpageUs from './GoToPages/CardpageUs';
import Mainhome from './Mainhome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Mainhome />} />
        <Route path="/cardpageus" element={<CardpageUs />} />
      </Routes>
    </Router>
  );
};

export default App;
