import {useState} from "react";

const ItemCount = () => {

    const stock=10; 
    const initial=1;
    
    const [contador, setContador] = useState(0);
  
    const aumentaContador = () => 
    {
      console.log(contador, stock, initial);
      if(contador>=stock)
      {
        console.log("Stock insuficiente para la cantidad.");
      }
      else
      {
        setContador(contador + 1);
      }
    }

    const reduceContador = () => 
    {
      if(contador<initial)
      {
        console.log("Debe ser valor positivo.");
      }

      else
      {
        setContador(contador - 1);
      }
    }

    const agregarCarro = () => 
    {
      console.log("Elemento agregado con exito.");
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