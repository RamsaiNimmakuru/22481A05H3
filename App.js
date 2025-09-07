//import React from 'react';
//import reactDom from 'react-dom';


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import RedirectPage from './Pages/RedirectPage';
import Statistics from './Pages/Statistics';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:shortcode" element={<RedirectPage />} />
      <Route path="/stats" element={<Statistics />} />
    </Routes>
  );
}

export default App;