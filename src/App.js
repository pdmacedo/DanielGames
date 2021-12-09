import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ItemListContainer from "./components/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {

  return (
    <>
      <Header/>
      <Nav/>

      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/juego/:id" element={<ItemDetailContainer/>}/>
      </Routes>

      <Footer/>
    </>);
}

export default App;