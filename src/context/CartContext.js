import React from "react";
import { createContext, useState } from "react";
export const context = createContext();
const {Provider} = context;

const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState([]);
    let stock = 5;

    const adicionaJuego = (producto) => {

        let resultado = isInCart(producto)
        console.log(carrito);
        console.log(resultado);

        if(resultado == true)
        {
            carrito.map(function (item, index)
            {
                parseInt(item.cantidad);

                if(producto.id == item.id)
                {
                    if(item.cantidad < stock && producto.cantidad > 0){
                    item.cantidad = item.cantidad + producto.cantidad;
                    }
                    else{
                        console.log("No es posible agregar más del stock disponible");
                    }
                }
            })
        }

        else{
            if(producto.cantidad > 0)
            {
                setCarrito([...carrito, producto]);
                console.log(carrito);
            }
        }
    }

    const eliminarJuego = (id) => {

        parseInt(id);

        carrito.map(function (item, index)
        {
            parseInt(item.cantidad);

            if(id == item.id)
            {
                if(item.cantidad == 1)
                {
                    const newCarro = carrito.splice(item,1);
                    setCarrito([newCarro]);
                    console.log(carrito);
                }
            
                else
                {
                    item.cantidad = item.cantidad - 1;
                    console.log(item.cantidad);
                    setCarrito(carrito);
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
                }
            })
        }
        return existe;
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