import Carro from "./Carro";

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
    </>
    );
}

export default Nav;