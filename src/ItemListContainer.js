import ItemCount from "./ItemCount";
import {useState} from "react";
import {useEffect} from "react";
import ItemList from "./ItemList";

const juegos = 
[
    {id:"1", nombre:"FIFA22", precio:"60$", categoria:"Deporte"},
    {id:"2", nombre:"NBA 2K22", precio:"50$", categoria:"Deporte"},
    {id:"3", nombre:"GTA V", precio:"65$", categoria:"Accion"}
];

const ItemListContainer = (saludo) => {

        const [mensaje, setMensaje] = useState("Cargando...");
        const [productos, setProductos] = useState([]);

        console.log(mensaje);
        
        useEffect(()=>{

            const promesa = new Promise((resuelto, rechazado) =>{
                setTimeout(() =>{
                    if(Math.random() > 0.5){
                        resuelto(juegos);
                    }
                    else{
                        rechazado();
                    }
                }, 2000) 
            })

            promesa.then((resultadoPromise)=>{
                setMensaje("Todo esta bien");
                setProductos(resultadoPromise);
            })
            .catch(()=>{
                setMensaje("El proceso fallo");
            })
        },[])

        //console.log(productos);

            saludo = "Unete a la comunidad Gamer!"

            return(
                <div>
                    <h3>{saludo}</h3>
                    <ItemList productos={productos} arrayJuegos="Hola"></ItemList>
                    <ItemCount/>
                </div>
            );

    }

export default ItemListContainer;