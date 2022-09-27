import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Inicio from './pages/inicio/Inicio';
//import Galeria from './pages/pagegaleria/Maingaleria';
//import Productos from './pages/pageproductos/Mainproductos';
//import Registro from './pages/registro/Pageregistro';

import { BrowserRouter,Navigate,Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
< BrowserRouter>
    <Routes>
    <Route path='/' element={<Inicio/>}></Route>
    <Route path='/finanzasweb/' element={<Inicio/>}></Route>
    <Route path='/inicio/' element={<Navigate replace to={"/"}/>}></Route>
    <Route path='/otro' element={<otro/>}></Route>
      
    </Routes>
</ BrowserRouter>
);


