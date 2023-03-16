import React, { useState } from "react";
// import Section from '../components/Banner';
import Banner from '../components/Banner';
import CardBox from '../components/CardBox';
import LocationsGet from '../components/LocationsGet';
// import Tag from '../components/Tag';
import Card from '../components/Card';
// import Collapse from '../components/Collapse';
// import Location from '../pages/Location';

export default function Home() {
    const [logements, setLogements] = useState([]);

    function handleDataReceived(data) {
        // Traitez les données comme vous le souhaitez ici
        setLogements(data);
    }

    return (
        <div className="home">
            <Banner url="bannerHome.png">
                <span>Chez vous,&nbsp;</span>
                <span>partout et ailleurs</span>
            </Banner>
            {/* <Galerie /> */}

            <CardBox>
                <LocationsGet onDataReceived={handleDataReceived} />
                {/* <Routes> */}
                    {/* Utilisez les données ici */}
                    {logements.map((item) => (
                        
                        // <Route key={item.id} path={`/logement/${item.id}`} element={<Location />} />
                        <Card key={item.id} id={item.id} url={item.cover}>{ item.title }</Card>
                    ))}
                {/* </Routes> */}
            </CardBox>

            {/* <Showbox title="Testeuh"><span>description de la location, villa luxueuse</span></Showbox>
            <Showbox title="Testeuh"><span>description de la location, villa luxueuse</span></Showbox>
            <Showbox title="Testeuh"><span>description de la location, villa luxueuse</span></Showbox>
            <Tag>tag-name</Tag> */}
            {/* <Thumb>Test</Thumb> */}
        </div>
    )
}