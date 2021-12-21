import React from "react";
import { createContext, useState, useEffect } from "react";
export const context = createContext();
const {Provider} = context;

const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const adicionaJuego = (producto) => {

        if(producto.cantidad == 0)
        {
            console.log("Adiciona valor válido");
        }
        else{

            //isInCart();
        }

        return carrito;
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

    /*const isInCart= (producto) => {
        
        console.log(producto);
        console.log(carrito);

        if(producto.id == carrito.id)
            {
                console.log("Este producto ya está en el carrito.");
            }
            else{
                carrito.push(producto);
                console.log(carrito);
                //sessionStorage.setItem('carro', JSON.stringify(carrito));
            }
    }*/

    const valorContexto = {
        carrito,
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