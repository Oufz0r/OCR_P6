import React, { useState } from 'react';
import arrow from '../arrow.png';

export default function Showbox(props) {
    const [showBox, setShowBox] = useState(false);

    const toggleShowBox = () => {
        setShowBox(!showBox);
    };

    return (
        <>
            <div className="showboxlong">
                <div className="showboxlong-up" onClick={toggleShowBox}>
                    <div className="showboxlong-title">{ props.title }</div>
                    <div className={`showbox-arrow ${showBox ? 'arrow-rotate' : ''}`}><img src={ arrow } alt="arrow" /></div>
                </div>
                {showBox && (
                <div className="showboxlong-down">
                    {props.children}
                </div>
                )}
            </div>
        </>
    )
}