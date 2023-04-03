import { useState, useEffect } from "react";

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
}