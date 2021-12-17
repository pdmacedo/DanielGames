import React from "react";
import { createContext, useState } from "react";
export const context = createContext();
const {Provider} = context;

const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState([]);
    //const [cantidad, setCantidad] = useState(0);

    const adicionaJuego = (juego, cantidad) => {
        setCarrito(juego);
        //Acá debería recibir desde Detail por el parametro el producto (objeto) para luego 
        //setearlo en el array del carrito
    }

    const eliminarJuego = (id) => {
    }

    const vaciarCarrito = () =>{
        setCarrito([]);
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

    const nombre = {name : "Adrian"}
    return(
        <Provider value={{nombre}}>
            {children}
        </Provider>
    )
}

export default CartContext;