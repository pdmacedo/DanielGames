import React from "react";
import {useContext, useState, useEffect} from "react";
import {context} from "../context/CartContext";
import { Link } from "react-router-dom";
import { db } from "../ItemCollection";
import { addDoc, collection } from "firebase/firestore";
import validator from "validator";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';

const CartWidget = () =>
{   
    const {carrito, eliminarJuego, vaciarCarrito} = useContext(context);

    const[loading, setLoading] = useState(false);
    const[id, setId] = useState("");
    const[nombre, setNombre] = useState("");
    const[apellido, setApellido] = useState("");
    const[telefono, setTelefono] = useState("");
    const[email, setEmail] = useState("");
    const[repemail, setRepemail] = useState("");

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

    const handleApellido = (e) =>{
        const valor = e.target.value;
        setApellido(valor);
    }

    const handleEmail = (e) =>{
        const valor = e.target.value;
        setEmail(valor);
    }

    const handleRepemail = (e) =>{
        const valor = e.target.value;
        setRepemail(valor);
    }

    const handleTelefono = (e) =>{
        const valor = e.target.value;
        setTelefono(valor);
    }

    let precioFinal = 0;

    const guardaCompra = async () =>
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
                    apellido,
                    email,
                    telefono
                },
                total : precioFinal
            }

            const ordenesCollection = collection(db,"ordenes");
            const referencia = await addDoc(ordenesCollection, orden);
            const id = referencia.id;
            setId(id);
            toast.success("Su compra " + id + " fue realizada con ??xito.");
            setLoading(false);
            vaciarCarrito();
    }

    const finalizoCompra = async () =>
    {
        const validaNombre = validator.isAlpha(nombre);
        const validaApellido = validator.isAlpha(apellido); 
        const validaEmail = validator.isEmail(email);
        const validaRepemail = validator.isEmail(repemail);
        const validaTlfn = validator.isNumeric(telefono);

        if(validaNombre)
        {
            if(validaApellido)
            {
                if(validaEmail)
                {
                    if(validaRepemail)
                    {
                        if(email == repemail)
                        {
                            if (validaTlfn) {
                                guardaCompra();
                            }
                            else{
                                toast.error("Hubo un problema. Verifique su n??mero de tel??fono.")
                            }
                        }
                        else{
                            toast.error("La confirmaci??n de email es inv??lida.");
                        }
                    }
                    else{
                        toast.error("Hubo un problema. Verifique su email en la confirmaci??n de email.");
                    }
                }
                else{
                    toast.error("Hubo un problema. Verifique su email.");
                }
            }
            else{
                toast.error("Hubo un problema. Verifique su apellido.");
            } 
        }
        else{
            toast.error("Hubo un problema. Verifique su nombre.");
        }
    }

    const[productos,setProductos] = useState([]);

    useEffect(()=>
    {
        setProductos(carrito);

    },[]);

    $(function() {
        setTimeout(function() {
            $("#paraBorrar").fadeOut(3000);
        },6000);
    });

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
                                        <th className="mgDer fuente" scope="col">C??digo</th>
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

                            <div class="form__group field">
                                <label for="inp" class="inp">
                                    <span class="label">Nombre</span>
                                    <input type="text" placeholder="&nbsp;" onChange={handleNombre} value={nombre}/>
                                    <span class="focus-bg"></span>
                                </label>
                                <br />
                                <label for="inp" class="inp">
                                    <span class="label">Apellido</span>
                                    <input type="text" placeholder="&nbsp;" onChange={handleApellido} value={apellido}/>
                                    <span class="focus-bg"></span>
                                </label>
                                <br />
                                <label for="inp" class="inp">
                                    <span class="label">Email</span>
                                    <input type="text" placeholder="&nbsp;" onChange={handleEmail} value={email}/>
                                    <span class="focus-bg"></span>
                                </label>
                                <br />
                                <label for="inp" class="inp">
                                    <span class="label">Confirme email</span>
                                    <input type="text" placeholder="&nbsp;" onChange={handleRepemail} value={repemail}/>
                                    <span class="focus-bg"></span>
                                </label>
                                <br />
                                <label for="inp" class="inp">
                                    <span class="label">Tel??fono</span>
                                    <input type="text" placeholder="&nbsp;" onChange={handleTelefono} value={telefono}/>
                                    <span class="focus-bg"></span>
                                </label>
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
                                <p className="fuente2 centrado2">Agregue productos al carrito</p>
                                <Link to={"/"}><button className="btnComprar info">Ver juegos</button></Link>
                                {id && <p className="fuente2" id="paraBorrar">Gracias por su compra {nombre}</p>}
                            </div>
                        )
                    }
                })()}  


            </div>
        </div>
    )
}

export default CartWidget;
