import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { db } from "../ItemCollection"
import { collection, onSnapshot, query, where } from "firebase/firestore"

const ItemsConsola = () => {

    const idConsola = window.location.pathname.split('/')[3];
    const nombreConsola = window.location.pathname.split('/')[2];

    const [consolas, setConsolas] = useState([]);
    const [lista, setLista] = useState([]);
    const product = collection(db, "detalleProducto");
    const filtro = query(product, where('Consolas', '==', `${nombreConsola}`))

    console.log(lista);

    useEffect(()=>
    {
        setLista([]);

        onSnapshot(filtro, (snapshot) => {
            let games = [];
        
            snapshot.docs.forEach((doc) =>{
                console.log(doc);
                games.push({ ...doc.data()})
            })

            console.log(games);
            setLista(games);
            console.log(nombreConsola);
        })

    },[nombreConsola]);


    useEffect(()=>
    {
        setConsolas([]);
    
        fetch(`https://api.rawg.io/api/games?platforms=${idConsola}&key=c3bfac0a62404fe694f31380acf2a573`)
        .then(response => response.json())
        .then(data =>
        {
            setConsolas(data.results);
        })
        .catch(e => console.log(e));
    },[idConsola]);

    return(
        <>
            {
                consolas.length ?
                //titulo de la consola
                <ItemList productos={consolas}></ItemList>

                :

                <p>Loading...</p>
            }  
        </>  
    )
}

export default ItemsConsola;