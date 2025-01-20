import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';
import Details from './pages/Details';
import Saved from './pages/Saved';

function App() {
  return (
    <Router basename="/explorer-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </Router>
  );
}

export default App;
