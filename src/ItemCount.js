import {useState} from "react";

const ItemCount = () => {

    const [contador, setContador] = useState(0);
  
    const aumentaContador = () => {
      setContador(contador + 1);
    }

    const reduceContador = () => {
        setContador(contador - 1);
      }
  
    return (
      <>
        <p>Cuantos juegos deseas comprar?: {contador}</p>
        <button onClick={aumentaContador}>+</button>
        <button onClick={reduceContador}>-</button>
      </>);
  }
  
  export default ItemCount;