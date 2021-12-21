import React from "react";
import {useContext} from "react";
import {context} from "../context/CartContext";

const CartWidget = () =>
{   
    const {carrito, eliminarJuego, vaciarCarrito} = useContext(context);

    const vaciarCarro = () =>
    {
        vaciarCarrito();
    }

    const eliminarProducto = (id) =>
    {
        console.log(id);
        eliminarJuego(id);
    }

    return(
        
        <div className="container">
            <div className="row">
                {(() => {
                    if(carrito.length != 0)
                    {
                        return(
                        <div className="col-md-12 col-sm-12">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="mgDer fuente" scope="col">Código</th>
                                        <th className="mgDerImg fuente" scope="col">Imagen</th>
                                        <th className="mgDer fuente" scope="col">Nombre</th>
                                        <th className="mgDer fuente" scope="col">Precio</th>
                                        <th className="mgDer fuente" scope="col">Cantidad</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        )
                    }
                    else
                    {
                        <p>Agregue un producto al carro.</p>
                    }
                })()}  
                {
                    carrito.map(function (n, index)
                    {
                        return(
                        <div className="col-md-12 col-sm-12" key={index}>
                            <table>
                                <tbody>
                                    <tr>
                                        <th className="mgDer fuente" scope="row">{n.id}</th>
                                        <td className="mgDer fuente"><img className="imgJuego" src={n.img} alt="imgJuego" /></td>
                                        <td className="mgDer fuente">{n.nombre}</td>
                                        <td className="mgDer fuente">{n.precio}</td>
                                        <td className="mgDer fuente">{n.cantidad}</td>
                                        <td><button className="btnComprar info" onClick={function(){eliminarProducto(`${n.id}`);}}>Eliminar</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        )
                    }) 
                }

                    <div className="col-md-12 col-sm-12">
                        <button className="btnComprar info" onClick={vaciarCarro}>Vaciar Carro</button>
                    </div>
            </div>
        </div>
    )
}

export default CartWidget;