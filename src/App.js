import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ItemListContainer from "./components/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemsConsola from "./components/ItemsConsola";

const App = () => {

  return (
    <>
      <Header/>
      <Nav/>

      <Routes>

        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/juego/:id" element={<ItemDetailContainer/>}/>
        <Route path="/plataforma/:id" element={<ItemsConsola/>}/>

      </Routes>

      <Footer/>
    </>);
}

export default App;