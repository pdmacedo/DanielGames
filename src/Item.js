import React from "react";

const Item = ({juego}) =>
{
    return(
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">  
                    <h4 className="card-title">{juego.nombre}</h4>
                    <p className="card-text">Precio: {juego.precio}</p>
                    <p className="card-text">Categoria: {juego.categoria}</p>     
                </div>
            </div>
        </div>
    )
}

export default Item;