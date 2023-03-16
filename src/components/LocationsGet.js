import { useState, useEffect } from "react";
// import Card from './Card';

export default function LocationsGet(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/logements.json")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    // Appel de la fonction de rappel avec les données récupérées
    useEffect(() => {
        props.onDataReceived(data);
    }, [data, props]);

    // return (
    //     <>
    //         {data.map((item) => (
    //             <Card key={item.id} id={item.id} url={item.cover}>{ item.title }</Card>
    //         ))}
    //     </>
    // );
}