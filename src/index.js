import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Inicio from './pages/inicio/Inicio';
import Servicios from './pages/servicios/Servicios';
import Testimonios from './pages/testimonios/Testimonios';
import Contactenos from './pages/contactenos/Contactenos';

import { BrowserRouter,Navigate,Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
< BrowserRouter>
    <Routes>
    <Route path='/' element={<Inicio/>}></Route>
    <Route path='/finanzasweb/' element={<Inicio/>}></Route>
    <Route path='/inicio/' element={<Navigate replace to={"/"}/>}></Route>
    <Route path='/servicios' element={<Servicios/>}></Route>
    <Route path='/testimonios' element={<Testimonios/>}></Route>
    <Route path='/contactenos' element={<Contactenos/>}></Route>  
    </Routes>
</ BrowserRouter>
);


