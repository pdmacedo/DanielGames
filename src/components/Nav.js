import Carro from "../Carro";
import ItemListContainer from "../ItemListContainer";

const Nav = () =>{

    return(
    <>
        <ul>
            <li><a class="active">JUEGOS</a></li>
            <li><a href="#">PS5</a></li>
            <li><a href="#">PS4</a></li>
            <li><a href="#">Xbox</a></li>
            <li class="icon" id="carro"><a href="#"><Carro/></a></li>
        </ul>

        <div><ItemListContainer/></div>
    </>
    );
}

export default Nav;