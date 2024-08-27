import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import mujerImg from '../assets/mujer.jpg'; // Importa la imagen
import '../styles/carrusel.css';

function Carrusel(){
    return(
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <div className="fondo">
                        <img src={mujerImg} className="d-block" alt="Descripción de la imagen" />
                    </div>                    
                    {/* <div className="container">
                        <div className="carousel-caption text-start">
                            <h1>Example headline.</h1>
                            <p>Some representative placeholder content for the first slide of the carousel.</p>
                            <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                        </div>
                    </div> */}
                </div>
                <div className="carousel-item">
                    <div className="fondo">
                        <img src={mujerImg} className="d-block" alt="Descripción de la imagen" />
                    </div>
                    {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="#777"/>
                    </svg>
                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Another example headline.</h1>
                            <p>Some representative placeholder content for the second slide of the carousel.</p>
                            <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                        </div>
                    </div> */}
                </div>
                <div className="carousel-item">
                <div className="fondo">
                        <img src={mujerImg} className="d-block w-100" alt="Descripción de la imagen" />
                    </div>
                    {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="#777"/>
                    </svg>
                    <div className="container">
                        <div className="carousel-caption text-end">
                            <h1>One more for good measure.</h1>
                            <p>Some representative placeholder content for the third slide of this carousel.</p>
                            <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                        </div>
                    </div> */}
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
    </div>
    
    )
}
export default Carrusel