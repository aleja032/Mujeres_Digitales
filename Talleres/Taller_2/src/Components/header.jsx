import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/header.css';

import Search from './search.jsx';
import logo from '../assets/logo.png';
import Dorito_1 from '../assets/Dorito_1.png';
import Dorito_2 from '../assets/Dorito_2.png';
import puntos_sup from '../assets/puntos_superior.png';
import puntos_inf from '../assets/puntos_inferior.png';
import mujer from '../assets/mujer.png';
import exs from '../assets/exs.png';

function Header() {
    return (
        <header className="">

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-brand d-flex gap-3 align-items-center">
                        <img src={logo} alt="Logo" className="logo" />
                        <p className="mb-0 d-flex name_page ">NYUGAME</p>
                    </div>

                    <div className="navbar-collapse collapse d-flex justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item me-5">
                                <a className="nav-link active text-white" aria-current="page" href="#">Ofertas</a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link text-white" aria-current="page" href="#">Productos</a>
                            </li>
                            <li className="nav-item d-flex align-items-center me-4">
                                <a className="nav-link text-white" aria-current="page" href="#"  data-bs-toggle="modal" data-bs-target="#carritoProducts" >Mi Carrito</a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-cart4 text-white" viewBox="0 0 16 16">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                </svg>
                            </li>
                        </ul>
                        <Search/>
                    </div>
                </div>
            </nav>
            <div className="contenido  d-flex">
                <div className="col-7">
                    <div className=" ">
                        <h1 className=" p-5 pb-4 pt-4 mt-5 ms-3">Lleva tu experiencia jugando al <span >siguiente</span> nivel...</h1>
                        <p className=" ms-5 ps-4 descrip_page">Encuentra los mejores productos gamer, desde consolas y accesorios hasta las últimas novedades en hardware.</p>
                        <div className="d-flex mt-4 justify-content-end ajustar_boton"> 
                            <button className="boton_Ver">Ver más</button>
                        </div>                   
                     </div>
                    <div className="comb_icons">
                        <div className="x"><img src={exs} alt="" className="icons"/></div>
                        <div className="triangulo_1 "><img src={Dorito_2} alt="" className="icons"/></div>
                        <div className="triangulo_2"><img src={Dorito_1} alt="" className="icons"/></div>
                    </div>
                </div>

                <div className="col-5 d-flex flex-column pt-4 justify-content-start ">
                    <div className="square d-flex">
                        <div className="linea1 mt-4 ">
                            <div className="linea2 mt-4 "></div>
                        </div>
                    </div>
                    <img src={puntos_sup} alt="" className="punto_superior"/>
                    <img src={mujer} alt="" className="woman"/>
                    <img src={puntos_inf} alt="" className="punto_inf"/>


                </div>
            </div>
        </header>

    )
}
export default Header