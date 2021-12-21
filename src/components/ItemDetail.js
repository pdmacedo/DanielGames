import React from "react";
import ItemCount from "./ItemCount";
import {useState, useContext} from "react";
import {context} from "../context/CartContext";


const ItemDetails = (juego) => {

    const {adicionaJuego, isInCart} = useContext(context);

    const agregaFinal = (ctd) =>{
       const cantidadFin = ctd;
       const producto = {id : juego.juego.id, nombre : juego.juego.name, precio : 50, cantidad : cantidadFin, img: juego.juego.background_image}
       adicionaJuego(producto);
    }

    const getGenres = () =>
    {
        if(Array.isArray(juego.juego.genres)&&(juego.juego.genres.length))
        {
            return juego.juego.genres.map(item => item.name).join(", ");
        }
    }

    const getDevelopers = () =>
    {
        if(Array.isArray(juego.juego.developers)&&(juego.juego.developers.length))
        {
            return juego.juego.developers.map(item => item.name).join(", ");
        }
    }

    const[stock, setStock] = useState(5);


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h4>{juego.juego.name}</h4>
                    <img className="imgDetails" src={`${juego.juego.background_image}`} alt="" height="200" width="200" />
                </div>

                <div className="col-md-6 col-sm-12">
                    <h2 className="margenArriba">Detalles del juego</h2>
                    <p className="fuente">Precio: 50$</p>
                    <p className="fuente">Rating: {juego.juego.rating}/5</p>
                    <p className="fuente">Categoria: {getGenres()}</p>
                    <p className="fuente">Desarrollador: {getDevelopers()}</p>
                    <p className="fuente">Consolas: PS5, Xbox</p>
                    <ItemCount stock={stock} agregaFinal={agregaFinal}/>
                </div>
            </div>
        </div>
    )

}

export default ItemDetails;