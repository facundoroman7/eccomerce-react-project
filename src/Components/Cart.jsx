import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from '../Context/CartContext'
import ItemCart from '../Components/ItemCart';
import Formulario from "./Formulario";



const Cart = () => {
  const { cart, vaciarCarrito, precioTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <div className="carrito-vacio">Su carrito esta vacio, aprete el boton para regresar.</div>
        <div>
          <Link to={"/"}>
            <Button color="blue.600" margin='15px' >
              Regresar a catalogo
            </Button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="container-itemcart">
    <div>
      {cart.map((producto) => (
        <ItemCart key={producto.id} producto={producto} />
        ))}
    </div>
        <div>
          <Button onClick={vaciarCarrito}>Limpiar Carrito</Button>
        </div>
        <div>
          <p className="total-productos" >Total: ${precioTotal()}</p>
        </div>
      

      <Formulario />
      
    </div>
  );
};

export default Cart;