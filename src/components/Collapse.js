import React, { useState } from 'react';
// import arrow from '../arrow.png';

export default function Showbox(props) {
    const [collapse, setCollapse] = useState(false);

    const toggleCollapse = () => {
        setCollapse(!collapse);
    };

    return (
        <>
            <div className="collapse">
                <div className={`collapse-up ${ props.look }`} onClick={toggleCollapse}>
                    {/* <h2 className="collapse-title">{ props.title }</h2> */}
                    <h2 className="collapse-title">{ props.title }</h2>
                    {/* <div className={`collapse-arrow ${collapse ? 'arrow-rotate' : ''}`}><img src={ arrow } alt="arrow" /></div> */}
                    <div className={`collapse-arrow ${collapse ? 'arrow-rotate' : ''}`}><img src="/images/arrow.png" alt="arrow" /></div>
                </div>
                {collapse && (
                <div className="collapse-down">
                    {props.children}
                </div>
                )}
            </div>
        </>
    )
}