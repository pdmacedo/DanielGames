import Carro from "./Carro";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>{

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