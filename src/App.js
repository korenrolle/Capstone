import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home/Home';
// import About from './Pages/About/About';
import Biography from './Pages/Biography/Biography';
// import Gallery from './Pages/Gallery/Gallery';
import Feed from './Pages/Music/Feed';
import AlbumDetails from './Pages/Music/AlbumDetails';
import Contact from './Pages/Gallery/Contact';
// import Player from './components/Player/Player';

function App() {
  // const URL = 'http://localhost:4000/';

  return (
    <div className="App">
      <Header />
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
