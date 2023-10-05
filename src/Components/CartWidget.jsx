import '../hoja-de-estilo/CartWidget.css'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react';

const CartWidget = () => {

  const {Totalesproductos} = useContext(CartContext);

  return (
     <div className='logo-carrito'> 

        🛒
       <span className='contador-de-productos'>{Totalesproductos()|| ''} </span>
        
      </div>
  )
}

export default CartWidget