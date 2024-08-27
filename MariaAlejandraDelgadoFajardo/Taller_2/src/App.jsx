import { useState } from 'react'
import './App.css';
import Header from './Components/header.jsx';
import Search from './Components/search.jsx';
import ProductList from './Components/ProductList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Components/Cart.jsx';

function App() {
  const [cartItems, setCartItems]= useState([]);
  const [count, setCount] = useState(0);
  const [cantidad, setCantidad]=useState(0);

  const sumaPrecios=(precio) =>{
    const sumaTotal=(count + precio).toFixed(3);
    setCount(parseFloat(sumaTotal)); 
  }

  const handleRemove = (index,precio) => {
    setCartItems(() => {
      const newItems = [...cartItems];
      newItems.splice(index, 1); 

      const newTotal = (count-precio).toFixed(3);
      setCount(parseFloat(newTotal));
      
      setCantidad(0);
      return newItems;
    });
  };  

    const agregarAlCarrito = (nombre, precio, id) => {
    setCartItems([...cartItems, { nombre, precio }]);
    sumaPrecios(precio);
  };

  return (
    <div className="container-fluid ">
      <Header/>

      <main className=''>
        <h2 className='p-5 p-4 d-flex justify-content-center'>Productos</h2>
     
        <div className="d-flex  justify-content-center align-items-center ">
            <Search/>
            <div className="cart_price d-flex align-items-center ms-4" >

              <button  className='border boton_carrito d-flex ps-5 pe-5 align-items-center' data-bs-toggle="modal" data-bs-target="#carritoProducts">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-cart4 text-white me-2" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                </svg>

                <p className='mb-0 text-white'>${count}</p>

              </button>
      
              <Cart productos={cartItems} total={count} handleRemove ={handleRemove }/>
            </div>
        </div>
        <ProductList agregarAlCarrito={agregarAlCarrito} />
        </main>
    </div>
  )

}

export default App
