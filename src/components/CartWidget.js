import React from "react";
import {useContext, useState, useEffect} from "react";
import {context} from "../context/CartContext";
import { Link } from "react-router-dom";

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
        setProductos(carrito);
    }

    const[productos,setProductos] = useState([]);

    useEffect(()=>
    {
        setProductos(carrito);

    },[]);

    return(
        
        <div className="container">
            <div className="row">

                {(() => {
                    if(carrito.length != 0)
                    {
                        return(
                        <div className="col-md-12 col-sm-12 topMargen">
                            <table className="tablas">
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
                })()} 


                {
                    carrito.map(function (n, index)
                    {
                        return(
                        <div className="col-md-12 col-sm-12 topMargen" key={index}>
                            <table className="tablas">
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

                {(() => {

                    let valorTotal = 0;
                    let cantidadTotal = 0;

                    if(carrito.length != 0)
                    {
                    carrito.map(function (n, index)
                        {
                            cantidadTotal = cantidadTotal + n.cantidad;
                            console.log(cantidadTotal);
                            valorTotal = valorTotal + (n.precio * n.cantidad);
                            console.log(valorTotal);

                        }) 

                    
                        return(
                        <div className="col-md-12 col-sm-12 divVaciar">
                            <p className="fuente">Valor total: {valorTotal}$</p>
                            <p className="fuente">Cantidad de juegos: {cantidadTotal}</p>
                            <button className="btnComprar info" onClick={vaciarCarro}>Vaciar Carro</button>
                        </div>
                        )
                    }
                    else
                    {
                        return(
                            <div className="centrado2">
                                <p className="fuente2">Ups! Aún no has agregado nada al carrito</p>
                                <Link to={"/"}><button className="btnComprar info">Ver juegos</button></Link>
                            </div>
                        )
                    }
                })()}  


            </div>
        </div>
    )
}

export default CartWidget;
