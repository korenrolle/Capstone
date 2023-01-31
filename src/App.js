import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Biography from './Pages/Biography/Biography';
import Gallery from './Pages/Gallery/Gallery';
import CreatePost from './components/Post/CreatePost';

function App() {
  const URL = 'http://localhost:4000/';

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About URL={URL} />} />
        <Route path="/biography" component={Biography} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/create" component={CreatePost} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
