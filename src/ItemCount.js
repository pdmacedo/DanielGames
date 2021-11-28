import {useState} from "react";

const ItemCount = () => {

    const [contador, setContador] = useState(0);
  
    const aumentaContador = () => {
      setContador(contador + 1);
    }

    const reduceContador = () => {
        setContador(contador - 1);
      }

    const agregarCarro = (onAdd, stock=10, initial=1) => {
        
        

        if(contador>stock)
        {
            console.log("No es posible agregar más de nuestra cantidad disponible.");
        }

        else if(contador<initial)
        {
            console.log(initial);
            console.log("Tiene que adicionar algún elemento para agregar.");
        }

        else
        {
            console.log("Elemento agregado con exito.");
        }
      }
  
    return (
      <>
        <p>Cuantos juegos deseas comprar?: {contador}</p>
        <button onClick={aumentaContador}>+</button>
        <button onClick={reduceContador}>-</button>
        <button onClick={agregarCarro}>Agregar al carro</button>
      </>);
  }
  
  export default ItemCount;