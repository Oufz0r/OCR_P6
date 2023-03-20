// import React, { useState } from "react";
import Carrousel from '../components/Carrousel';
import Content from '../components/Content';




export default function Location(props) {
    // const [logements, setLogements] = useState([]);

    // function handleDataReceived(data) {
    //     setLogements(data);
    // }

    // On récupère l'id de la location
    const locationId = props.data;

    // let index = 0;
    // let nbPictures;

    return (
        <div className="location">
            <Carrousel id={ locationId } />
            <Content id={ locationId }/>
        </div>
    );
}