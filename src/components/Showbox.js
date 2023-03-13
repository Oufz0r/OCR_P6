import React, { useState } from 'react';
import arrow from '../arrow.png';

export default function Showbox(props) {
    const [showBox, setShowBox] = useState(false);

    const toggleShowBox = () => {
        setShowBox(!showBox);
    };

    return (
        <>
            <div className="showbox">
                <div className="showbox-up" onClick={toggleShowBox}>
                    <div className="showbox-title">{ props.title }</div>
                    <div className={`showbox-arrow ${showBox ? 'arrow-rotate' : ''}`}><img src={ arrow } alt="arrow" /></div>
                </div>
                {showBox && (
                <div className="showbox-down">
                    {props.children}
                </div>
                )}
            </div>
        </>
    )
}