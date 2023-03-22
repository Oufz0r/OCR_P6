import React, { useState } from "react";
// imports composants
import LocationsGet from '../components/LocationsGet';
import Tag from '../components/Tag';
import Collapse from '../components/Collapse';
// imports images
// import starFull from '../starFull.png';
// import starEmpty from '../starEmpty.png';


export default function Carrousel(props) {
    const [logements, setLogements] = useState([]);
    // const [score, setScore] = useState(0);

    function handleDataReceived(data) {
        setLogements(data);
    }

    let stars = [];

    // fonction pour afficher la note de la location
    function rating(value) {
        let total = 5;
        let rate = value;
        for(let n=0; n < total; n++)
        {
            if(n < rate)
            {
                // stars.push(<img key={ n } src={ starFull } className="star" alt="étoile pleine" />)
                stars.push(<img key={ n } src="/images/starFull.png" className="star" alt="étoile pleine" />)
            }
            else
            {
                // stars.push(<img key={ n } src={ starEmpty } className="star" alt="étoile vide" />)
                stars.push(<img key={ n } src="/images/starEmpty.png" className="star" alt="étoile vide" />)
            }
        }
    }


    return (
        <>
            <LocationsGet onDataReceived={handleDataReceived} />
            {logements.map((logement) => (
                // nbTags = logement.tags.length,
                logement.id ===  props.id ?
                (
                    <div key={ logement.id } className="Content">
                        <div className="content-header">
                            <div className="content-header-left">
                                <h1>{ logement.title }</h1>
                                <span>{ logement.location }</span>
                                <div className="tags">
                                    {logement.tags.map((tag, index) => (
                                        <Tag key={ index } className="content-tag">{ tag }</Tag>
                                    ))}
                                </div>
                            </div>
                            <div className="content-header-right">
                                <div className="location-host">
                                    {/* On sépare Prénom et Nom pour y insérer un retour à la ligne */}
                                    { logement.host.name.split(" ")[0] }
                                    <br />
                                    { logement.host.name.split(" ")[1] }
                                    <img src={ logement.host.picture } alt={ logement.host.name } />
                                </div>
                                <div className="location-note">
                                    {
                                        <>
                                        { rating(logement.rating) }
                                        { stars }
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="content-body">
                            <Collapse title="Description">
                                {
                                    logement.description
                                }
                            </Collapse>
                            <Collapse title="Équipements">
                                <ul>
                                {
                                    logement.equipments.map((equipment, index) => (
                                        <li key={ index }>{ equipment }</li>
                                    ))
                                }
                                </ul>
                            </Collapse>
                        </div>
                    </div>
                ) : null
            ))}
        </>
    )
}