import React from "react";
import {useContext} from "react";
import {context} from "../context/CartContext";

const CartWidget = () =>
{
    const {adicionaJuego, verCarro, eliminarJuego, vaciarCarrito} = useContext(context);

    const vaciarCarro = () =>
    {
        vaciarCarrito();
    }

    return(
        <div>
            <button className="btnComprar info" onClick={vaciarCarro}>Vaciar Carro</button>
        </div>
    )
}

export default CartWidget;