//1. NECESITAMOS A REACT
import React from 'react';

//2. NECESITAMOS A ReactDOM
import ReactDOM from 'react-dom';

//3. NECESITAMOS UN COMPONENTE PARA MOSTRAR
import App from './App';

//PARA IMPORTAR CSS
import "./estilos.css";

//4. NECESITAMOS MOSTRAR EL COMPONENTE
ReactDOM.render(<App/>, document.getElementById('root'));