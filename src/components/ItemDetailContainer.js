import { render } from "@testing-library/react";
import React from "react";
import { useState, useEffect, useContext } from "react";
import ItemDetails from "./ItemDetail";
import CartContext from "../context/CartContext";


const ItemDetailContainer = () => {

    //const {carrito, adicionaJuego, eliminarJuego, vaciarCarrito} = useContext(CartContext);
    console.log(useContext(CartContext))

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