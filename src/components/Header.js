import { Link } from "react-router-dom";
const Header = () =>{

    return (
    <header id="main-header">
        <Link to={"/"} style={{textDecoration: 'none'}}><h1 className="sinDecoracion">Daniel Games</h1></Link>
    </header>
    );
}

export default Header;