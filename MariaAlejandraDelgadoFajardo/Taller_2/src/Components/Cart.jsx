import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Cart.css';

function Cart({productos,total,handleRemove }) {
    return (
        <div className="modal fade cart_modal" id="carritoProducts" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="carritoProductsLabel" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-scrollable m-0 cart_dialog">
                <div className="modal-content cartModal_Content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center">
                        <div className="d-flex justify-content-around pe-5 linea_inferior_p">
                            <p className="mb-2 name_p">Producto</p>
                            <p className="mb-2 pe-3 name_p">Precio</p>
                        </div>
                        {  productos.map((item, index) => (
                         
                            
                            <div key={index} className="linea_inferior_p d-flex  p-3 justify-content-between align-items-center ">
                                <div className="border_bottom">
                                    <p className="mb-1 p_name">{item.nombre}</p>
                                    <p className="mb-0 purple">Cantidad: 1</p>

                                </div>
                                <div className="p">
                                    <p className="mb-0 ms-4 precio_producto">${item.precio}</p>
                                </div>
                                <button type="button" className="btn btn-danger p-2 delete" onClick={() => handleRemove(index,item.precio)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                    </svg>
                                </button>
                            </div>
                            ))
                        }
                        <div className="d-flex justify-content-around align-items-end pt-3 pe-5">
                            <p className="mb-0" >Valor a pagar: </p>
                            <p className="mb-0">${total}</p>
                        </div>
                        <div className="d-flex  justify-content-around p-2 mt-5 ">
                            <p className="mb-0 opciones_pago">Opciones de pago</p>
                            <div className="d-flex">
                                <input className="radio" type="radio" name="payment" id="nequi" value="nequi" />
                                <label htmlFor="nequi">Nequi</label>
                            </div>
                            <div className="">
                                <input type="radio" className="radio " name="payment" id="efecty" value="efecty" />
                                <label htmlFor="efecty">Efecty</label>
                            </div>
                        </div>
                        <button type="submit" className="pagar mt-3" >Pagar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart