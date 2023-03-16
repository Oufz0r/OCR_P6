import React, { useState } from "react";
// import Card from '../components/Card';
import LocationsGet from '../components/LocationsGet';
import Carrousel from '../components/Carrousel';

import arrowBack from '../arrowBack.png';
import arrowForward from '../arrowForward.png';



export default function Location(props) {
    const [logements, setLogements] = useState([]);

    function handleDataReceived(data) {
        // Traitez les données comme vous le souhaitez ici
        setLogements(data);
    }

    // coder le slideshow en js for..

    // On récupère l'id de la location
    const locationId = props.data;

    let index = 0;
    let nbPictures;

    // function pictureBack() {
    //     index--;
    //     console.log(index);
    // }

    // function pictureForward() {
    //     index++;
    // }

    return (
        <div className="location">
            
                    <Carrousel id={ locationId } />
                    {/* <img src={logement.pictures[index]} alt={logement.title} /> */}

        </div>
    );

    // style={{ backgroundImage: `url(/images/${ props.url })` }}

    // return (
    //     <>
    //     <div className="location">
    //         {data.map((item) => (
    //             <Card key={item.id} id={item.id} url={item.cover}>{ item.title }</Card>
    //         ))}
    //     </div>
    //     </>
    // );
}