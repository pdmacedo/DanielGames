import React from "react";
import { useState, useEffect } from "react";
import ItemDetails from "./ItemDetail";
import { db } from "../ItemCollection"
import { collection, onSnapshot, query, where } from "firebase/firestore"

const ItemDetailContainer = () => {

    const id = window.location.pathname.split('/')[2];
    const [game, setGame] = useState([]);

    const product = collection(db, "detalleProducto");
    const filtro = query(product, where('Id', '==', `${id}`))
    const [juegoFirestore, setJuegoFirestore] = useState([])

    useEffect(()=>
    {
        setGame([]);

        fetch(`https://api.rawg.io/api/games/${id}?key=c3bfac0a62404fe694f31380acf2a573`)
        .then(response => response.json())
        .then(data =>
        {
            setGame(data);
        })
        .catch(e => console.log(e));

        setJuegoFirestore([]);

        onSnapshot(filtro, (snapshot) => {
           
            let detailProduct = {nombre:'', precio:'', rating:'', categoria:'', desarrollador:'', consolas:'', stock:''};
        
            snapshot.docs.forEach((doc) =>{
                console.log(doc.data())
                detailProduct.nombre=((doc.data().Nombre));
                detailProduct.precio=(doc.data().Precio);
                detailProduct.rating=(doc.data().Rating);
                detailProduct.categoria=(doc.data().Categoria);
                detailProduct.desarrollador=(doc.data().Desarrollador);
                detailProduct.consolas=(doc.data().Consolas);
                detailProduct.stock=(doc.data().Stock);
            })

            console.log(detailProduct);
            setJuegoFirestore(detailProduct);

        })

    },[id]);

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12">

                {juegoFirestore.nombre != '' ? (
                    <h4>Titulo del Firestore: {juegoFirestore.nombre}</h4>
                ) : (
                    <h4>Titulo de la API: {game.name}</h4>
                )}

                </div>
            </div>
        </div>

        <ItemDetails juego={game}></ItemDetails>
        </>
    )
}

export default ItemDetailContainer;