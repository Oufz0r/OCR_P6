import React, { useState } from "react";

export default function Carrousel(props) {
    const [index, setIndex] = useState(0);

    function pictureBack() {
        if(index === 0) {
            setIndex(nbPictures - 1);
        } else {
            setIndex(index - 1);
        }
    }

    function pictureForward() {
        if(index === nbPictures-1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    const logement = props.logement;
    const nbPictures = logement.pictures.length;

    // Préchargement des images
    for(let i = 0; i < logement.pictures.length; i++) {
        let images = new Image();
        images.src = logement.pictures[i];
    }

    return (
        <>
                        <div key={ logement.id } className="Carrousel" style={{ backgroundImage: `url(${ logement.pictures[index] })` }}>
                            <img src="/images/arrowBack.png" className={`arrowBack arrow ${nbPictures < 2 ? 'elementHide' : '' }`} onClick={ pictureBack } alt="Flèche précédente" />
                            <img src="/images/arrowForward.png" className={`arrowForward arrow ${nbPictures < 2 ? 'elementHide' : '' }`} onClick={ pictureForward } alt="Flèche suivante" />
                            <div className={`pictureCount ${nbPictures < 2 ? 'elementHide' : '' }`}>{ index+1 + '/' + nbPictures}</div>
                        </div>
        </>
    )
}