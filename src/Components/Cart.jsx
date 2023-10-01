import Form from "./Form";
// import { useContext } from 'react';
// import { CartContext } from '../Components/context/CartContext'; 

const Cart = () => {
  // const { cart } = useContext(CartContext); 
  const cart= [1]

  return (
    <div>
      <h2>Carrito de compra</h2>
      {cart.length > 0 ?  <Form /> : <button>No hay nada en el carrito, vuelva a la pagina principal</button>}
    </div>
  );
};

export default Cart;
