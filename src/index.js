import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import App from './App';
import Biography from './Pages/Biography/Biography';
// import UpcomingShows from './UpcomingShows';
import Music from './Pages/Music/Music';
import Gallery from './Pages/Gallery/Gallery';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/biography" component={Biography} />
        {/* <Route path="/upcoming-shows" component={UpcomingShows} /> */}
        <Route path="/music" component={Music} />
        <Route path="/gallery" component={Gallery} />
      </Routes>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);
