import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ItemListContainer from "./components/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemsConsola from "./components/ItemsConsola";
import Carro from "./components/Carro";
import CartContext from "./context/CartContext";

const App = () => {

  return (
    <>
      <Header/>
      <Nav/>
	  <CartContext>
		<Routes>

			<Route path="/" element={<ItemListContainer/>}/>
			<Route path="/juego/:id" element={<ItemDetailContainer/>}/>
			<Route path="/plataforma/ps5/:id" element={<ItemsConsola/>}/>
			<Route path="/plataforma/ps4/:id" element={<ItemsConsola/>}/>
			<Route path="/plataforma/xboxone/:id" element={<ItemsConsola/>}/>
			<Route path="/plataforma/pc/:id" element={<ItemsConsola/>}/>
			<Route path="/cart" element={<Carro/>}/>

		</Routes>
	  </CartContext>
      <Footer/>
    </>);
}

export default App;