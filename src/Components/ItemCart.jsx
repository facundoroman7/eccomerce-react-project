import '../hoja-de-estilo/item-detail.css'
import { CartContext } from '../Context/CartContext'
import { Button } from '@chakra-ui/react'
import { useContext } from 'react'

const ItemCart = ({producto}) => {
    const {sacarDelCart} = useContext(CartContext)
  return (
    <div className='item-cart-container'>
        <div>
          <img src={producto.imagen} alt="imagen del libro que eligiste" className='img-cart-item' />
        </div>
        <div className="decripcion-cart-item">
          <h2> Libro: {producto.nombre} </h2>
          <p> Precio:$ {producto.precio} </p>
          <p> Cantidad: {producto.cantidad} </p>
          <p>Subtotal: $ {producto.cantidad * producto.precio}</p>
          <Button color='blue.600' margin='10px'
           onClick={() => sacarDelCart(producto.id)} >Eliminar</Button>
        </div>
    </div>
  )
}

export default ItemCart