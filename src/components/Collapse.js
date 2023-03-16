import React, { useState } from 'react';
import arrow from '../arrow.png';

export default function Showbox(props) {
    const [showBox, setShowBox] = useState(false);

    const toggleShowBox = () => {
        setShowBox(!showBox);
    };

    return (
        <>
            <div className="collapse">
                <div className="collapse-up" onClick={toggleShowBox}>
                    <div className="collapse-title">{ props.title }</div>
                    <div className={`collapse-arrow ${showBox ? 'arrow-rotate' : ''}`}><img src={ arrow } alt="arrow" /></div>
                </div>
                {showBox && (
                <div className="collapse-down">
                    {props.children}
                </div>
                )}
            </div>
        </>
    )
}