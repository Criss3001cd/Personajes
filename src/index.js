import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Footer from './Foter';

import Contenedor from './Contenedor'

import ContenedorP from './ContenedorP'

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);
//  ReactDOM.render(
//   <Contenedor />,
//   document.getElementById('root')
// ); 

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);

 ReactDOM.render(
  <ContenedorP />,
  document.getElementById('personajes')
); 



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
