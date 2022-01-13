import React , {useContext} from "react";
import { Link } from "react-router-dom";
import {context} from "../context/CartContext";

const Nav = () =>{

    const {carrito} = useContext(context);

    let cantidadTotal = 0;

    carrito.map(function (n, index)
                    {
                        cantidadTotal = cantidadTotal + n.cantidad;
                    }) 
    
    return(
    <>
        <ul>
            <li><Link class="active sinEfecto" to={"/"}>JUEGOS</Link></li>
            <li><Link to={"/plataforma/PS5/187"}>PS5</Link></li>
            <li><Link to={"/plataforma/PS4/18"}>PS4</Link></li>
            <li><Link to={"/plataforma/XboxOne/1"}>Xbox One</Link></li>
            <li><Link to={"/plataforma/PC/4"}>PC</Link></li>
            <li class="icon" id="carro">
                <Link to={"/cart"}>
                    <div>
                        {cantidadTotal}<span className="material-icons">shopping_cart</span>
                    </div>
                </Link>
            </li>
        </ul>
    </>
    );
}

export default Nav;