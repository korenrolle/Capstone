import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Biography from './Pages/Biography/Biography';
import Gallery from './Pages/Gallery/Gallery';
import Feed from './Pages/Music/Feed';

function App() {
  const URL = 'http://localhost:4000/';

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
        {/* <Route path="/biography" element={Biography} /> */}
        <Route path="/gallery" element={Gallery} />
        <Route path="/music" element={<Feed />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
