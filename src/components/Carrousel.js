import React, { useState } from "react";

import arrowBack from '../arrowBack.png';
import arrowForward from '../arrowForward.png';
// import image from './bannerBG.png';

import LocationsGet from '../components/LocationsGet';
import Location from '../pages/Location';

export default function Carrousel(props) {
    const [logements, setLogements] = useState([]);
    const [index, setIndex] = useState(0);

    function handleDataReceived(data) {
        // Traitez les données comme vous le souhaitez ici
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
            {/* Utilisez les données ici */}
            {logements.map((logement) => (
                logement.id ===  props.id ?
                (
                    nbPictures = logement.pictures.length,

                    // <div key={logement.id}>
                        <div key={ logement.id } className="Carrousel" style={{ backgroundImage: `url(${ logement.pictures[index] })` }}>
                            <img src={ arrowBack } className="arrowBack" onClick={ pictureBack } />
                            <img src={ arrowForward } className="arrowForward" onClick={ pictureForward } />
                        </div>
                ) : null
            ))}
        </>
    )
}