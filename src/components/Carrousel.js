import React, { useState } from "react";

import arrowBack from '../arrowBack.png';
import arrowForward from '../arrowForward.png';
// import image from './bannerBG.png';

import LocationsGet from '../components/LocationsGet';
// import Location from '../pages/Location';

export default function Carrousel(props) {
    const [logements, setLogements] = useState([]);
    const [index, setIndex] = useState(0);

    function handleDataReceived(data) {
        setLogements(data);
    }

    let nbPictures;

    function pictureBack() {
        setIndex((index - 1 + nbPictures) % nbPictures);
    }

    function pictureForward() {
        setIndex((index + 1) % nbPictures);
    }

    return (
        <>
            <LocationsGet onDataReceived={handleDataReceived} />
            {logements.map((logement) => (
                logement.id ===  props.id ?
                (
                    nbPictures = logement.pictures.length,
                        <div key={ logement.id } className="Carrousel" style={{ backgroundImage: `url(${ logement.pictures[index] })` }}>
                            <img src={ arrowBack } className="arrowBack arrow" onClick={ pictureBack } alt="Flèche précédente" />
                            <img src={ arrowForward } className="arrowForward arrow" onClick={ pictureForward } alt="Flèche suivante" />
                        </div>
                ) : null
            ))}
        </>
    )
}