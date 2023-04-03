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

    // On récupère l'id de la location dans l'url
    const { locationId } = useParams();


    if(logements.length > 0)
    {
        for(let logement of logements)
        {
            if(logement.id === locationId)
            {
                return (
                    <div className="location">
                        <Carrousel logement={ logement } />
                        <Content logement={ logement } />
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