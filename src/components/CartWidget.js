import React from "react";
import {useContext, useState, useEffect} from "react";
import {context} from "../context/CartContext";
import { Link } from "react-router-dom";
import { db } from "../ItemCollection";
import { addDoc, collection } from "firebase/firestore";
import validator from "validator";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CartWidget = () =>
{   
    const {carrito, eliminarJuego, vaciarCarrito} = useContext(context);

    const[loading, setLoading] = useState(false);
    const[id, setId] = useState("");
    const[nombre, setNombre] = useState("");
    const[telefono, setTelefono] = useState("");
    const[email, setEmail] = useState("");

    const vaciarCarro = () =>
    {
        vaciarCarrito();
    }

    const eliminarProducto = (id) =>
    {
        eliminarJuego(id);
        setProductos(carrito);
    }

    const handleNombre = (e) =>{
        const valor = e.target.value;
        setNombre(valor);
    }

    const handleEmail = (e) =>{
        const valor = e.target.value;
        setEmail(valor);
    }

    const handleTelefono = (e) =>{
        const valor = e.target.value;
        setTelefono(valor);
    }

    let precioFinal = 0;

    const finalizoCompra = async () =>
    {
        const valida = validator.isAlpha(nombre) && validator.isEmail(email) && validator.isNumeric(telefono);

        if(valida)
        {
            carrito.map(function (n, index)
            {
                precioFinal = precioFinal + (n.precio * n.cantidad);
            }) 

            setLoading(true);

            const orden = {
                productos : carrito,
                usuario : {
                    nombre,
                    email,
                    telefono
                },
                total : precioFinal
            }

            const ordenesCollection = collection(db,"ordenes");
            const referencia = await addDoc(ordenesCollection, orden);
            const id = referencia.id;
            setId(id);
            setLoading(false);
            vaciarCarrito();

            console.log(referencia)
            toast.success("Su compra " + id + "fue realizada con éxito.");
        }
        else{
            toast.error("Sus datos son inválidos.")
        }
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
                            valorTotal = valorTotal + (n.precio * n.cantidad);

                        }) 

                    
                        return(
                        <div className="col-md-12 col-sm-12 divVaciar">
                            <p className="fuente">Precio total: {valorTotal}$</p>
                            <p className="fuente">Cantidad de juegos: {cantidadTotal}</p>
                            {loading && <p className="fuente">Cargando...</p> }
                            <div>
                                <label>Nombre</label>
                                <input type="text" onChange={handleNombre} value={nombre}/>
                                <br />
                                <label>Email</label>
                                <input type="text" onChange={handleEmail} value={email}/>
                                <br />
                                <label>Teléfono</label>
                                <input type="text" onChange={handleTelefono} value={telefono}/>
                            </div>
                            <br />
                            <button className="btnComprar info" onClick={finalizoCompra}>Finalizar compra</button>
                            <button className="btnComprar info" onClick={vaciarCarro}>Vaciar Carro</button>

                        </div>
                        )
                    }
                    else
                    {
                        return(
                            <div className="centrado2">
                                <p className="fuente2">Agregue productos al carrito</p>
                                <Link to={"/"}><button className="btnComprar info">Ver juegos</button></Link>
                                {id && <p className="fuente2">Gracias por su compra {nombre}</p>}
                            </div>
                        )
                    }
                })()}  


            </div>
        </div>
    )
}

export default CartWidget;
