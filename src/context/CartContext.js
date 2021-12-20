import React from "react";
import { createContext, useState, useEffect } from "react";
export const context = createContext();
const {Provider} = context;

const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState([]);
    const adicionaJuego = (producto) => {
       
        carrito.push(producto);
        console.log(carrito);
    }

    /*const verCarro = (game) =>
    {
        const game = carrito;
    }*/

    const eliminarJuego = (id) => {
        
    }

    const vaciarCarrito = () =>{
        setCarrito([]);
        console.log(carrito);
        //setCantidad(0);
    }

    const isInCart= (id) => {
        //Podría ser ejecutada en la funcion adicionaJuego dentro de un condicionante, 
        //a ver si el porducto ya existe 
    }

    const valorContexto = {
        carrito,
        //cantidad,
        adicionaJuego,
        eliminarJuego,
        vaciarCarrito
    }

    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}

export default CartContext;