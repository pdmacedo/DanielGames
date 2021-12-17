import React from "react";
import { Link } from "react-router-dom";

const Item = ({juego}) =>
{
    return(
        <div className="col-md-4 col-sm-12 margenBottom">
            <div className="card margenTopCards">
                <div className="card-body">  
                    <h4 className="card-title centrado">{juego.name}</h4>
                    <img className="imgItem" src={`${juego.background_image}`} alt="" />
                    <br />
                    <button className="btn info"><Link className="sinEfecto" to={`/juego/${juego.id}`}>Ver mas</Link></button>     
                </div>
            </div>
        </div>
    )
}

export default Item;