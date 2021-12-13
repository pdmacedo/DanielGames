import Carro from "./Carro";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>{

    return(
    <>
        <ul>
            <li><Link class="active sinEfecto" to={"/"}>JUEGOS</Link></li>
            <li><Link to={"/plataforma/187"}>PS5</Link></li>
            <li><Link to={"/plataforma/18"}>PS4</Link></li>
            <li><Link to={"/plataforma/1"}>Xbox One</Link></li>
            <li><Link to={"/plataforma/4"}>PC</Link></li>
            <li class="icon" id="carro"><Link to={"/"}><Carro/></Link></li>
        </ul>
    </>
    );
}

export default Nav;