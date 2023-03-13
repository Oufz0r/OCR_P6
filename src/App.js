import {useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/app.css';
import Home from './pages/Home';
import Lost from './pages/Lost';
// import TechnoAdd from './pages/TechnoAdd';
// import TechnoList from './pages/TechnoList';
// import {TechnoList2} from './pages/TechnoList';
import Header from './components/Header';
// import Section from './components/Section';


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
    {/* <Section /> */}
    {/* <Home />
      <TechnoAdd />
      <TechnoList /> */}
    </>
  );
}

export default App;
