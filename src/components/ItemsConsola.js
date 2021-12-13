import Item from "./Item";
import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemsConsola = () => {

    const idConsola = window.location.pathname.split('/')[2];

    const [consolas, setConsolas] = useState([]);

    useEffect(()=>
    {
        setConsolas([]);
    
        fetch(`https://api.rawg.io/api/games?platform=${idConsola}&key=c3bfac0a62404fe694f31380acf2a573`)
        .then(response => response.json())
        .then(data =>
        {
            setConsolas(data.results);
        })
        .catch(e => console.log(e));
    },[]);

    console.log(consolas);

    return(
        <>
            {
                consolas.results.length ?
            
                <ItemList productos={consolas.results}></ItemList>

                :

                <p>Loading...</p>
            }  
        </>  
    )
}

export default ItemsConsola;