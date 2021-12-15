import React from "react";
import Item from "./Item"

const ItemList = ({productos}) =>
{
    return(
            <div className="container">
                <div className="row">
                    {productos.map((elemento, key) => (
                    <Item key={key} juego={elemento}></Item>
                    ))}
                </div>
            </div>
    )
}

export default ItemList;