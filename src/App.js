// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/app.css';
// PAGES
import Home from './pages/Home';
import About from './pages/About';
import Location from './pages/Location';
import Lost from './pages/Lost';
// COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <div className="bodyContainer">
        <Header />
        <Routes>
          <Route path="/logement/:locationId" element={<Location />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Lost />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
