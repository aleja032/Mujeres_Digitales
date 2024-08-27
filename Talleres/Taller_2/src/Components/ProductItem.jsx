import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/ProductItem.css';

import chasis_white from '../assets/chasis_white.png';
import chasis_black from '../assets/chasis_black.png';

import ProductDetails from './ProductDetails';

function ProductItem({parametro, agregarAlCarrito}) {

    return (
        
        <div className="card-container">
            <div className="card d-flex pt-3 pb-4">
                <h4 className="card-tittle text-center mb-3">{parametro.nombre}</h4>
                <div className="d-flex justify-content-center mb-3">
                    <img src={chasis_white} alt="" className="card-img  chasis" />
                    
                </div>

                <ul className="card-text d-flex flex-column align-items-start mb-1 ms-2 ">
                    <li>Tamaño: {parametro.descripcion.Tamaño}</li>
                    <li>Material: {parametro.descripcion.Material}</li>
                    <li>Flujo de aire: {parametro.descripcion["Flujo de Aire"]}</li>

                </ul>

                <div className="price d-flex ms-4">
                    Precio: $
                    <p className="ms-2 mb-2">{parametro.precio}</p>
                </div>
                
                <div className="btn-group d-flex justify-content-center p-0">
                    <button type="button" className="see" data-bs-toggle="modal" data-bs-target={`#productDetailsModal-${parametro.id}`}>
                        Ver Detalles
                    </button> 

                    <button type="button" className="add" onClick={() => agregarAlCarrito(parametro.nombre,parametro.precio,parametro.id)} >Agregar al Carrito</button>
                    <ProductDetails id={parametro.id} details={parametro} agregarAlCarrito={agregarAlCarrito} />

                </div>
            </div>
        </div>
        
    )

}
export default ProductItem