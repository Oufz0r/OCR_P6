// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/app.css';
// PAGES
import Home from './pages/Home';
import Lost from './pages/Lost';
// COMPONENTS
import Header from './components/Header';
// import Tag from './components/Tag';
// import Thumb from './components/Thumb';
// import Showbox from './components/Showbox';
import Footer from './components/Footer';
// import TechnoList from './pages/TechnoList';
// import {TechnoList2} from './pages/TechnoList';


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Lost />} />
      {/* <Route path="/add" element={<TechnoAdd />} /> */}
      {/* <Route path="/list" element={<TechnoList />} /> */}
    </Routes>
    {/* <Showbox title="Testeuh"><span>description de la location, villa luxueuse</span></Showbox>
    <Tag>tag-name</Tag>
    <Thumb>Test</Thumb> */}
    {/* <Section /> */}
    {/* <Home />
      <TechnoAdd />
      <TechnoList /> */}
      <Footer />
    </>
  );
}

export default App;
