import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemsConsola = () => {

    const idConsola = window.location.pathname.split('/')[3];

    const [consolas, setConsolas] = useState([]);

    useEffect(()=>
    {
        setConsolas([]);
        console.log(consolas)
    
        fetch(`https://api.rawg.io/api/games?platforms=${idConsola}&key=c3bfac0a62404fe694f31380acf2a573`)
        .then(response => response.json())
        .then(data =>
        {
            setConsolas(data.results);
            console.log(data)
        })
        .catch(e => console.log(e));
    },[idConsola]);

    console.log(consolas);

    return(
        <>
            {
                consolas.length ?
                //titulo de la consola
                <ItemList productos={consolas}></ItemList>

                :

                <p>Loading...</p>
            }  
        </>  
    )
}

export default ItemsConsola;