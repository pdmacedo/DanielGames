import ItemCount from "./ItemCount";

function ItemListComponent(saludo) {

    saludo = "Unete a la comunidad Gamer!"

    return(
        <div>
            <h3>{saludo}</h3>
            <ItemCount/>
        </div>
    );

}

export default ItemListComponent;