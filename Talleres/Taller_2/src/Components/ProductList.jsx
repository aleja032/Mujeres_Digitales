import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductItem from "./ProductItem";
import info_hardware from '../Utilities/info_hardware.json'

function ProductList({agregarAlCarrito}){ 
    return(
        <div className="list_general_product">
            <div className="list_products">
                <h3 className="border-bottom ms-5 me-5 mb-3 p-2 fs-5">Categoria Chasis </h3>
                <div className="p-3 d-flex justify-content-center align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <div className="contenedor d-flex justify-content-center gap-4 ">
                        { info_hardware.map((item, index)=>(
                            <ProductItem key={index} parametro={item} agregarAlCarrito={agregarAlCarrito} />
                        ))}
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}
export default ProductList