import React, { useState } from "react";
import Banner from '../components/Banner';
import CardBox from '../components/CardBox';
import LocationsGet from '../components/LocationsGet';
import Card from '../components/Card';

export default function Home() {
    const [logements, setLogements] = useState([]);

    function handleDataReceived(data) {
        setLogements(data);
    }

    return (
        <div className="home">
            <Banner url="bannerHome.webp">
                <span>Chez vous,</span>
                <span>partout et ailleurs</span>
            </Banner>

            <CardBox>
                <LocationsGet onDataReceived={handleDataReceived} />
                    {logements.map((item) => (
                        <Card key={item.id} id={item.id} url={item.cover}>{ item.title }</Card>
                    ))}
            </CardBox>
        </div>
    )
}