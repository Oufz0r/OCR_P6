// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import './css/app.css';
// PAGES
import Home from './pages/Home';
import About from './pages/About';
import Location from './pages/Location';
import Lost from './pages/Lost';
// COMPONENTS
import Header from './components/Header';
// import Tag from './components/Tag';
import Footer from './components/Footer';
// import TechnoList from './pages/TechnoList';
// import {TechnoList2} from './pages/TechnoList';
import LocationsGet from './components/LocationsGet';


function App() {

  const [logements, setLogements] = useState([]);

  function handleDataReceived(data) {
      setLogements(data);
  }

  return (
    <>
      <div className="bodyContainer">
        <Header />
        <LocationsGet onDataReceived={handleDataReceived} />
        <Routes>
          {/* Pour chaque entrée (fichier JSON) on crée une Route */}
          {logements.map((item) => (
              <Route key={item.id} path={`/logement/${item.id}`} element={<Location data={item.id} />} />
          ))}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/logement/:id" element={<Location />} /> */}
          <Route path="/logement/*" element={<Lost />} />
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
      </div>
      <Footer />
    </>
  );
}

export default App;
