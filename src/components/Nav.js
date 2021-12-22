import React , {useContext} from "react";
import { Link } from "react-router-dom";
//import {context} from "../context/CartContext";

const Nav = () =>{

    //const {carrito} = useContext(context);
    
    return(
    <>
        <ul>
            <li><Link class="active sinEfecto" to={"/"}>JUEGOS</Link></li>
            <li><Link to={"/plataforma/ps5/187"}>PS5</Link></li>
            <li><Link to={"/plataforma/ps4/18"}>PS4</Link></li>
            <li><Link to={"/plataforma/xboxOne/1"}>Xbox One</Link></li>
            <li><Link to={"/plataforma/pc/4"}>PC</Link></li>
            <li class="icon" id="carro">
                <Link to={"/cart"}>
                    <div>
                        <span className="material-icons">shopping_cart</span>
                    </div>
                </Link>
            </li>
        </ul>
    </>
    );
}

export default Nav;

/*
 {(() => {
                if(carrito.length != 0)
                {
                    return(
                        <li class="icon" id="carro">
                            <Link to={"/cart"}>
                                <div>
                                    <span className="material-icons">shopping_cart</span>
                                </div>
                            </Link>
                        </li>
                    )
                }
            })()}
 */