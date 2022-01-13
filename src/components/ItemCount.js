import {useState} from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({stock , agregaFinal}) => {

    const initial=1;

    const [contador, setContador] = useState(0);
  
    const aumentaContador = () => 
    {
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
      if(contador >= 1 && contador<= stock)
      {
        toast.success("Elemento agregado con exito.");
      }

      else
      {
        toast.warning("Selecciona un elemento para agregar.");
      }

      const valorFinal = contador;
      agregaFinal(valorFinal);
    }

    return (
      <div id="contador">
        <p className="fuente">Cantidad: {contador}</p>
        <button className="btnComprar info" onClick={aumentaContador}>+</button>
        <button className="btnComprar info" onClick={reduceContador}>-</button>
        <button className="btnComprar info" onClick={agregarCarro}>Agregar</button>
      </div>
      );
  }
  
  export default ItemCount;