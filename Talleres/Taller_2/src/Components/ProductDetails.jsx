import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/ProductDetails.css';
import chasis_white from '../assets/chasis_white.png';

function ProductDetails({ id, details,agregarAlCarrito }) {
    return (
        <div className="modal fade details_modal"  id={`productDetailsModal-${id}`}  data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="background_linear">
                    <div className="modal-content detailsModal_content">

                        <div className="modal-body d-flex p-0 pe-4 ">
                    
                            <div className="modal-header d-flex align-items-start p-2 pt-4">
                                <button type="button" className="btn-close ms-2" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="cl-4 d-flex  me-2 flex-column justify-content-end align-items-center">
                                <img src={chasis_white} alt="" className="imagen_ mb-4"/>
                                <p className=" mb-0 price_" >Precio: {details.precio}</p>
                                <p className=" guarantee mb-5">Garantia: {details.garantia}</p>
                            </div>
                            <div className="col-7 ">
                                <p className="modal-title text-center mt-4 titulo_details">{details.nombre} </p>
                                    <p className="subtitle text-center pb-1">{details.seccion}</p>
                                    <p className="tecnicas mb-3">Caracteristicas Tecnicas</p>
                                    <ul className="ul">
                                        <li className="li">Tamaño: {details.descripcion.Tamaño}</li>
                                        <li className="li">Material: {details.descripcion.Material}</li>
                                        <li className="li">Flujo de Aire: {details.descripcion["Flujo de Aire"]}</li>
                                        <li className="li">Soporte de GPU: {details.descripcion["Soporte de GPU"]}</li>
                                        <li className="li">Almacenamiento: {details.descripcion.Almacenamiento}</li>
                                        <li className="li">Conectividad Frontal: {details.descripcion["Conectividad Frontal"]}</li>
                                        <li className="li">Iluminación RGB: {details.descripcion["Iluminación RGB"]}</li>
                                        <li className="li">Panel Lateral: {details.descripcion["Panel Lateral"]}</li>
                                        <li className="li">Compatibilidad: {details.descripcion.Compatibilidad}</li>
                                        <li className="li">Gestión de Cables: {details.descripcion["Gestión de Cables"]}</li>
                                    </ul>
                                    <button type="submit" className="add_cart m-4" onClick={() => agregarAlCarrito(details.nombre,details.precio,details.id)} data-bs-dismiss="modal">
                                        Agregar al carrito
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart4 text-black ms-2" viewBox="0 0 16 16">
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                        </svg>
                                    </button>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails