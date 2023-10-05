import { useState } from "react"
import '../hoja-de-estilo/ItemsCounter.css'


const ItemsCounter = ({  initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial)

  const suma = () => {
    if (cantidad) {
      setCantidad(cantidad + 1)
    }
  }

  const resta = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  return (
    <>

      <div className="Contador-de-productos">

        <button onClick={resta}>-</button>
        <p>{cantidad} </p>
        <button onClick={suma}>+</button>

      </div>

      <button className="agregar-carrito" onClick={() => onAdd(cantidad)} >Agregar al carrito</button>
    </>
  )
}

export default ItemsCounter

