import React from "react";
import { createContext, useState, useEffect } from "react";
export const context = createContext();
const {Provider} = context;

const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const adicionaJuego = (producto) => {

        isInCart(producto);
    }

    const eliminarJuego = (id) => {

        parseInt(id);
        console.log(carrito);

        carrito.map(function (item, index)
        {
            parseInt(item.cantidad);

            if(id == item.id)
            {
                console.log("Entre");

                if(item.cantidad == 1)
                {
                    console.log("Entre 2");
                    carrito.splice(item,1);
                    console.log(carrito);
                }
            
                else
                {
                    console.log("Entre 3");
                    item.cantidad = item.cantidad - 1;
                    console.log(item.cantidad);
                }
            }
        })
    }

    const vaciarCarrito = () =>{
        setCarrito([]);
        console.log(carrito);
    }

    const isInCart = (producto) => {

        let existe = false;

        if(carrito.length != 0)
        {
            carrito.map(function (item, index)
            {
                if(producto.id == item.id)
                {
                    existe = true;
                    console.log("Este producto ya está en el carrito.");
                }
            })
        }
        
        if(existe == false)
        {
            carrito.push(producto);
            console.log(carrito);
        }
    }

    const valorContexto = {
        carrito,
        adicionaJuego,
        eliminarJuego,
        vaciarCarrito, 
        isInCart
    }

    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}

export default CartContext;