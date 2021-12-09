import { render } from "@testing-library/react";
import { useState, useEffect } from "react"
import ItemDetails from "./ItemDetail";

const ItemDetailContainer = () => {

    const id = window.location.pathname.split('/')[2];

    const [game, setGame] = useState([]);

    useEffect(()=>
    {
        setGame([]);
    
        fetch(`https://api.rawg.io/api/games/${id}?key=c3bfac0a62404fe694f31380acf2a573`)
        .then(response => response.json())
        .then(data =>
        {
            console.log(data);
            setGame(data);
        })
        .catch(e => console.log(e));
    },[]);


    return(
        <>
        <ItemDetails juego={game}></ItemDetails>
        </>
    )
}

export default ItemDetailContainer;