import { useState } from "react";
import React, { useParams } from "react-router-dom";
import Carrousel from '../components/Carrousel';
import Content from '../components/Content';
import LocationsGet from '../components/LocationsGet';
import Lost from '../pages/Lost';




export default function Location(props) {
    const [logements, setLogements] = useState([]);

    function handleDataReceived(data) {
        setLogements(data);
    }

    // On récupère l'id de la location
    // const locationId = props.data;
    const { locationId } = useParams();

    // let index = 0;
    // let nbPictures;

    // return (
    //     <Lost />
    // )
    if(logements.length > 0)
    {
        for(let logement of logements)
        {
            if(logement.id === locationId)
            {
                return (
                    <div className="location">
                        <Carrousel logement={ logement } id={ locationId } />
                        <Content logement={ logement } id={ locationId }/>
                    </div>
                )
            }
        }
        return (<Lost />)
    }

    return (
            <LocationsGet onDataReceived={handleDataReceived} />
    );
}