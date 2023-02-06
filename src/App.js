import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home/Home';
import Biography from './Pages/Biography/Biography';
import Feed from './Pages/Music/Feed';
import AlbumDetails from './Pages/Music/AlbumDetails';
import Contact from './Pages/Gallery/Contact';

// Main component that renders the Header, Routes, and Footer components
function App() {
  return (
    <div className="App">
      <Header />
      {/* Routing setup */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/music" element={<Feed />} />
        <Route path="/music/:id" element={<AlbumDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
