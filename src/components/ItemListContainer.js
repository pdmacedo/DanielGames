import {useState, useEffect} from "react";
import ItemList from "./ItemList";


const ItemListContainer = (saludo) => {

        const [mensaje, setMensaje] = useState("Cargando...");
        const [productos, setProductos] = useState([]);

        useEffect(()=>
        {

        setProductos([]);
        
        fetch("https://api.rawg.io/api/games?page_size=24&key=c3bfac0a62404fe694f31380acf2a573")
        .then(response => response.json())
        .then(data =>{
            setProductos(data.results);
        })
        .catch(e => console.log(e));
        },[])

        saludo = "Unete a la comunidad Gamer!"

        return(
            <div>
                <h3>{saludo}</h3>
                <ItemList productos={productos}></ItemList>
            </div>
        );

    }

export default ItemListContainer;