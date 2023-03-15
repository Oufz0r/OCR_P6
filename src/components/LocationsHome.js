import React, { useState, useEffect } from "react";
import Thumb from './Thumb';

export default function FetchGet(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/logements.json")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <>
            {data.map((item) => (
                <Thumb key={item.id} url={item.cover}>{ item.title }</Thumb>
            ))}
        </>
    );
}